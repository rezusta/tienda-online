import { Component, computed, inject, input, Signal } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { ClientesListado } from '../../components/clientes-listado/clientes-listado';
import { ClientesListadoFiltro } from '../../components/clientes-listado-filtro/clientes-listado-filtro';
import { CLIENTES_MOCK } from '../../data/clientes.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-page',
  imports: [ClientesListado, ClientesListadoFiltro],
  templateUrl: './clientes-page.html',
  styleUrl: './clientes-page.css',
})
export class ClientesPage {
  router = inject(Router);

  nombre = input<string>();

  listaclientes: Signal<Cliente[]> = computed(() => {
    if (!this.nombre()) {
      return CLIENTES_MOCK;
    }

    return CLIENTES_MOCK.filter(cliente => cliente.firstName.toLowerCase().includes(this.nombre()!.toLowerCase()));
  });

  seleccionDeCliente(cliente: Cliente) {
    this.router.navigate(['/clientes', cliente.id]);
  }

  filtraClientes(filtro: string | null) {
    this.router.navigate(['/clientes'], {
      queryParams: { nombre: filtro || null }
    })
  }
}
