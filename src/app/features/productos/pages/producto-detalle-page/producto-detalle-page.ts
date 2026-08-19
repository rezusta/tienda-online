import { Component } from '@angular/core';
import { Producto } from '../../models/producto.interface';
import { PRODUCTOS_MOCK } from '../../data/productos.mock';

@Component({
  selector: 'app-producto-detalle-page',
  imports: [],
  templateUrl: './producto-detalle-page.html',
  styleUrl: './producto-detalle-page.css',
})
export class ProductoDetallePage {
  producto: Producto = PRODUCTOS_MOCK[1];
}
