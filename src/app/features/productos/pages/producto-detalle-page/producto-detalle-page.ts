import { Component, computed, input, type Signal } from '@angular/core';
import { Producto } from '../../models/producto.interface';
import { PRODUCTOS_MOCK } from '../../data/productos.mock';

@Component({
  selector: 'app-producto-detalle-page',
  imports: [],
  templateUrl: './producto-detalle-page.html',
  styleUrl: './producto-detalle-page.css',
})
export class ProductoDetallePage {
  id = input.required<number>();

  producto: Signal<Producto> = computed(() => PRODUCTOS_MOCK.find((p) => p.id == this.id())!);
}
