import { Component } from '@angular/core';
import { ProductoDetalle } from '../../components/producto-detalle/producto-detalle';
import { ProductosListadoFiltro } from '../../components/productos-listado-filtro/productos-listado-filtro';
import { ProductosListado } from '../../components/productos-listado/productos-listado';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-productos-page',
  imports: [ProductosListado, ProductoDetalle, ProductosListadoFiltro],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
})
export class ProductosPage {
  productoSeleccionado: Producto = { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 19.99 };

  listaproductos: Producto[] = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 10.99 },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 19.99 },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 5.99 },
    { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', precio: 15.49 },
    { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', precio: 8.75 }
  ]

  seleccionDeProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

  filtraProductos(filtro: string) {
    if (filtro != '') {
      this.listaproductos = this.listaproductos.filter(producto => producto.nombre.toLowerCase().includes(filtro.toLowerCase()));
    }
  }

}
