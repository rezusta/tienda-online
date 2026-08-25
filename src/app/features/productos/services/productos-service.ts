import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosResponse } from '../models/producto.interface';

@Service()
export class ProductosService {
   httpClient = inject(HttpClient);

   getProductos(filtroNombreProducto: string): Observable<ProductosResponse> {
        return this.httpClient.get<ProductosResponse>('https://dummyjson.com/products/search', {
         params: {
            q: filtroNombreProducto || ''
         }
        });
   }}
