import { Component } from '@angular/core';
import { ProductosListadoFiltro } from '../../components/productos-listado-filtro/productos-listado-filtro';
import { ProductosListado } from '../../components/productos-listado/productos-listado';
import { Producto } from '../../models/producto.interface';
import { PRODUCTOS_MOCK } from '../../data/productos.mock';

@Component({
  selector: 'app-productos-page',
  imports: [ProductosListado, ProductosListadoFiltro],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
})
export class ProductosPage {
  productoSeleccionado: Producto | null = null;
  listaproductos: Producto[] = PRODUCTOS_MOCK;

  seleccionDeProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

  filtraProductos(filtro: string) {
    if (filtro != '') {
      this.listaproductos = this.listaproductos.filter(producto => producto.nombre.toLowerCase().includes(filtro.toLowerCase()));
    }
  }

}
