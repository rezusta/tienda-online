import { Component, computed, inject, input, resource } from '@angular/core';
import { ProductosListadoFiltro } from '../../components/productos-listado-filtro/productos-listado-filtro';
import { ProductosListado } from '../../components/productos-listado/productos-listado';
import { Producto } from '../../models/producto.interface';
import { Router } from '@angular/router';
import { Productos } from '../../services/productos';
import { firstValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-productos-page',
  imports: [ProductosListado, ProductosListadoFiltro, AsyncPipe],
  templateUrl: './productos-page.html',
  styleUrl: './productos-page.css',
})
export class ProductosPage {
  servicioProductos = inject(Productos);

  nombre = input<string>(''); 
  
  router = inject(Router);

  productosResource = resource({ 
    params: () => ({nombre: this.nombre()}),
    loader: ({params}) => firstValueFrom(this.servicioProductos.getProductos(params.nombre || '')),
  });

  listaProductos = computed(() =>
    this.productosResource.value()?.products
  );

  seleccionDeProducto(producto: Producto) {
    this.router.navigate(['/productos', producto.id])
  }

  filtraProductos(filtro: string | null) {
    this.router.navigate(['/productos'], {
      queryParams: { nombre: filtro || null }
    })
  }

}
