import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientesResponse } from '../models/cliente.interface';
import { Observable } from 'rxjs';

@Service()
export class ClientesService {
   httpClient = inject(HttpClient);

   getClientes(): Observable<ClientesResponse> {
        return this.httpClient.get<ClientesResponse>('https://dummyjson.com/users');
   }
}
