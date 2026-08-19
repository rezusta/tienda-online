import { Component, input, output } from '@angular/core';
import { ProductosListadoFiltro } from '../productos-listado-filtro/productos-listado-filtro';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-productos-listado',
  imports: [ProductosListadoFiltro],
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
