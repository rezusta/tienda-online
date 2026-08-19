import { Component, input } from '@angular/core';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  producto = input<Producto>();
}
