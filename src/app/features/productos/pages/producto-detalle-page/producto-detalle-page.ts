import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductosService } from '../../services/productos-service';

@Component({
  selector: 'app-producto-detalle-page',
  imports: [],
  templateUrl: './producto-detalle-page.html',
  styleUrl: './producto-detalle-page.css',
})
export class ProductoDetallePage {
  id = input<number>()

  servicioProductos = inject(ProductosService);

  recursoProducto = rxResource({
    params: () => ({ idProducto: this.id() }),
    stream: ({ params }) => this.servicioProductos.getProducto(params.idProducto!),
  });

  producto = computed(() => this.recursoProducto.value()!);
  cargandoProducto = this.recursoProducto.isLoading;
  errorProducto = this.recursoProducto.error;
}
