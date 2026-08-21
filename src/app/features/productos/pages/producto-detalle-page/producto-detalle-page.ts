import { Component, computed, inject, input, resource, Signal } from '@angular/core';
import { Producto } from '../../models/producto.interface';
import { PRODUCTOS_MOCK } from '../../data/productos.mock';
import { Productos } from '../../services/productos';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-producto-detalle-page',
  imports: [],
  templateUrl: './producto-detalle-page.html',
  styleUrl: './producto-detalle-page.css',
})
export class ProductoDetallePage {
  servicioProductos = inject(Productos);

  id = input<number>()
  
  productosRes = resource({
    params: () => ({id: this.id()}),
    loader: ({params}) => firstValueFrom(this.servicioProductos.getProducto(params.id!)),
  });

  producto: Signal<Producto> = computed(() => {
    return this.productosRes.value()!;
  });
}
