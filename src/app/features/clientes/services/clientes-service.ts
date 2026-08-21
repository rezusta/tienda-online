import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClientesResponse } from '../models/cliente.interface';

@Service()
export class ClientesService {
    private httpClient = inject(HttpClient);

    getClientes(): Observable<ClientesResponse> {
        return this.httpClient.get<ClientesResponse>('https://dummyjson.com/users');
    }

    getCliente(id: number): Observable<Cliente> {
        return this.httpClient.get<Cliente>(`https://dummyjson.com/users/${id}`);
    }
}

