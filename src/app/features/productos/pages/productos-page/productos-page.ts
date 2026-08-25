import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductosListadoFiltro } from '../../components/productos-listado-filtro/productos-listado-filtro';
import { ProductosListado } from '../../components/productos-listado/productos-listado';
import { Producto } from '../../models/producto.interface';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos-service';

@Component({
  selector: 'app-productos-page',
  imports: [ProductosListado, ProductosListadoFiltro],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
})
export class ProductosPage {
  router = inject(Router);
  servicioProductos = inject(ProductosService);

  nombre = input<string>();

  recursoCambioFiltro = rxResource({
    params: () => ({ filtroNombreProducto: this.nombre() }),
    stream: ({ params }) =>
      this.servicioProductos.getProductos(params.filtroNombreProducto || ''),
  });

  cargandoProductos = this.recursoCambioFiltro.isLoading;
  errorProductos = this.recursoCambioFiltro.error;
  respuestaProductos = this.recursoCambioFiltro.value;
  listaproductos = computed(() => this.respuestaProductos()?.products ?? []);

  seleccionDeProducto(producto: Producto) {
    this.router.navigate(['/productos', producto.id])
  }

  filtraProductos(filtro: string | null) {
    this.router.navigate(['/productos'], {
      queryParams: { nombre: filtro || null }
    })
  }

}
