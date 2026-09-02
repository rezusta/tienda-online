import { HttpClient, HttpErrorResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it, beforeEach } from 'vitest';
import { authMockInterceptor } from './auth-mock-interceptor';
import { LoginResponse } from '../../features/auth/models/auth.interface';

function crearHttpClient(): HttpClient {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({
    providers: [provideHttpClient(withInterceptors([authMockInterceptor]))],
  });
  return TestBed.inject(HttpClient);
}

async function login(httpClient: HttpClient, user: string, pass: string): Promise<LoginResponse> {
  return await new Promise((resolve, reject) => {
    httpClient.post<LoginResponse>('/api/auth/login', { user, pass }).subscribe({
      next: resolve,
      error: reject,
    });
  });
}

async function capturarError(peticion: Promise<unknown>): Promise<HttpErrorResponse> {
  try {
    await peticion;
    throw new Error('Se esperaba un error HTTP');
  } catch (error) {
    return error as HttpErrorResponse;
  }
}

describe('authMockInterceptor', () => {
  let httpClient: HttpClient;

  beforeEach(() => {
    httpClient = crearHttpClient();
  });

  it('devuelve token y rol EDITOR para admin/admin', async () => {
    const respuesta = await login(httpClient, 'admin', 'admin');

    expect(respuesta.rol).toBe('EDITOR');
    expect(respuesta.token).toBeTruthy();
  });

  it('devuelve token y rol LECTOR para user/user', async () => {
    const respuesta = await login(httpClient, 'user', 'user');

    expect(respuesta.rol).toBe('LECTOR');
    expect(respuesta.token).toBeTruthy();
  });

  it('devuelve 401 con credenciales incorrectas', async () => {
    const error = await capturarError(login(httpClient, 'admin', 'malo'));

    expect(error.status).toBe(401);
  });

  it('devuelve 401 si no hay sesión válida', async () => {
    const error = await capturarError(
      new Promise((resolve, reject) =>
        httpClient.get('/api/auth/perfil').subscribe({ next: resolve, error: reject })
      )
    );

    expect(error.status).toBe(401);
  });

  it('devuelve 403 si el rol LECTOR intenta escribir', async () => {
    const { token } = await login(httpClient, 'user', 'user');

    const error = await capturarError(
      new Promise((resolve, reject) =>
        httpClient
          .post('/api/productos', {}, { headers: { Authorization: `Bearer ${token}` } })
          .subscribe({ next: resolve, error: reject })
      )
    );

    expect(error.status).toBe(403);
  });

  it('permite leer el perfil con sesión válida', async () => {
    const { token } = await login(httpClient, 'user', 'user');

    const perfil = await new Promise<{ user: string; rol: string }>((resolve, reject) =>
      httpClient
        .get<{ user: string; rol: string }>('/api/auth/perfil', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .subscribe({ next: resolve, error: reject })
    );

    expect(perfil).toEqual({ user: 'user', rol: 'LECTOR' });
  });
});
