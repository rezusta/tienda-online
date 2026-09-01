import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { leerToken } from '../auth/token.util';
import { LoginRequest, LoginResponse, Rol } from '../../features/auth/models/auth.interface';

const SESSION_STORAGE_KEY = 'tienda-online.auth';

@Service()
export class AuthService {
  private readonly httpClient = inject(HttpClient);

  private readonly session = signal<LoginResponse | null>(this.recuperarSesion());

  readonly user = computed(() => this.session()?.user ?? null);
  readonly role = computed<Rol | null>(() => this.session()?.rol ?? null);
  readonly token = computed(() => this.session()?.token ?? null);
  readonly isAuthenticated = computed(() => this.token() !== null /*leerToken(this.token()) !== null*/);
  readonly isEditor = computed(() => this.isAuthenticated() && this.role() === 'EDITOR');

  // Primero
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(`/api/auth/login`, credentials)
      .pipe(tap((response) => this.guardarSesion(response)));
  }

  // Segundo
  logout(): void {
    this.session.set(null);
    this.borrarSesion();
  }

  private guardarSesion(response: LoginResponse): void {
    if (!leerToken(response.token)) {
      throw new Error('El servidor ha devuelto una sesión no válida');
    }

    this.session.set(response);
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(response));
  }

  private recuperarSesion(): LoginResponse | null {
    const storedSession = localStorage.getItem(SESSION_STORAGE_KEY);
    
    if (!storedSession) {
      return null;
    }

    return JSON.parse(storedSession) as LoginResponse;
  }

  private borrarSesion(): void {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }

}
