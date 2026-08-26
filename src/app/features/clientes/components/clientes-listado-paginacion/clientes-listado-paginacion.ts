import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-clientes-listado-paginacion',
  imports: [],
  templateUrl: './clientes-listado-paginacion.html',
  styleUrl: './clientes-listado-paginacion.css',
})
export class ClientesListadoPaginacion {
  skip = input.required<number>();
  itemsPorPagina = input.required<number>();
  totalItems = input.required<number>();

  cambioPagina = output<number>();

  totalPaginas = computed(() => {
    return Math.ceil(this.totalItems() / this.itemsPorPagina());
  });

  paginaActual = computed(() => {
    return Math.floor(this.skip() / this.itemsPorPagina()) + 1;
  });

  primeraPagina = computed(() => {
    return this.paginaActual() == 1;
  });

  ultimaPagina = computed(() => {
    return this.paginaActual() == this.totalPaginas();
  });
  
  clickCambioPagina(pagina: number) {
    this.cambioPagina.emit(pagina);
  }
}
