import { Component, input, output } from '@angular/core';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-productos-listado',
  imports: [],
  templateUrl: './productos-listado.html',
  styleUrl: './productos-listado.css',
})
export class ProductosListado {
  productos = input<Producto[]>([]);
  productoSeleccionado = output<Producto>();

  onProductoClick(producto: Producto) {
    this.productoSeleccionado.emit(producto);
  }
}
