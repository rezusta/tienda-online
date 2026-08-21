import { Component, input, output } from '@angular/core';
import { ProductosListadoFiltro } from '../productos-listado-filtro/productos-listado-filtro';
import { Producto, ProductosResponse } from '../../models/producto.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-listado',
  imports: [ProductosListadoFiltro, RouterLink],
  templateUrl: './productos-listado.html',
  styleUrl: './productos-listado.css',
})
export class ProductosListado {
  productos = input<Producto[] | undefined>();
  productoSeleccionado = output<Producto>();

  onProductoClick(producto: Producto) {
    this.productoSeleccionado.emit(producto);
  }
}
