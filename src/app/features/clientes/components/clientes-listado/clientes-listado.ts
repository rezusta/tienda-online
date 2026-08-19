import { Component, input, output } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { ClientesListadoFiltro } from '../clientes-listado-filtro/clientes-listado-filtro';

@Component({
  selector: 'app-clientes-listado',
  imports: [ClientesListadoFiltro],
  templateUrl: './clientes-listado.html',
  styleUrl: './clientes-listado.css',
})
export class ClientesListado {
  clientes = input<Cliente[]>([]);
  clienteSeleccionado = output<Cliente>();

  onClienteClick(cliente: Cliente) {
    this.clienteSeleccionado.emit(cliente);
  }
}
