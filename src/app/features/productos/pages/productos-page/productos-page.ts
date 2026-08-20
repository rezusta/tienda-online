import { Component, computed, inject, input, Signal } from '@angular/core';
import { ProductosListadoFiltro } from '../../components/productos-listado-filtro/productos-listado-filtro';
import { ProductosListado } from '../../components/productos-listado/productos-listado';
import { Producto } from '../../models/producto.interface';
import { PRODUCTOS_MOCK } from '../../data/productos.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-page',
  imports: [ProductosListado, ProductosListadoFiltro],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
})
export class ProductosPage {
  private router = inject(Router);

  nombre = input<string>();

  listaProductos = computed(() => { 
    if (!this.nombre()) {
      return PRODUCTOS_MOCK;
    }
    return PRODUCTOS_MOCK.filter((producto) => producto.nombre.toLowerCase().includes(this.nombre()!.toLowerCase()));
  });

  seleccionDeProducto(producto: Producto) {
    this.router.navigate(['/productos', producto.id]);
  }

  filtraProductos(filtro: string) {
    this.router.navigate(['/productos'], { queryParams: { nombre: filtro || null } });
  }
}
