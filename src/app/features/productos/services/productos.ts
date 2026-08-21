import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Producto, ProductosResponse } from '../models/producto.interface';
import { Observable } from 'rxjs';

@Service()
export class Productos {
    private httpClient = inject(HttpClient);

    getProductos(filtroNombre: string): Observable<ProductosResponse> {
        return this.httpClient.get<ProductosResponse>('https://dummyjson.com/products/search', {
            params: {
                q: filtroNombre
            }
        });
    }

    getProducto(id: number): Observable<Producto> {
        return this.httpClient.get<Producto>(`https://dummyjson.com/products/${id}`);
    }
}
