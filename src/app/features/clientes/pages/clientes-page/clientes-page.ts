import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { ClientesListado } from '../../components/clientes-listado/clientes-listado';
import { ClientesListadoFiltro } from '../../components/clientes-listado-filtro/clientes-listado-filtro';
import { CLIENTES_MOCK } from '../../data/clientes.mock';

@Component({
  selector: 'app-clientes-page',
  imports: [ClientesListado, ClientesListadoFiltro],
  templateUrl: './clientes-page.html',
  styleUrl: './clientes-page.css',
})
export class ClientesPage {
  clienteSeleccionado: Cliente | null = null;
  listaclientes: Cliente[] = CLIENTES_MOCK;

  seleccionDeCliente(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
  }

  filtraClientes(filtro: string) {
    if (filtro != '') {
      this.listaclientes = this.listaclientes.filter(cliente => cliente.nombre.toLowerCase().includes(filtro.toLowerCase()));
    }
  }
}
