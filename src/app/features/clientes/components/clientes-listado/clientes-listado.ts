import { Component, input, output } from '@angular/core';
import { Cliente, ClientesResponse } from '../../models/cliente.interface';

@Component({
  selector: 'app-clientes-listado',
  imports: [],
  templateUrl: './clientes-listado.html',
  styleUrl: './clientes-listado.css',
})
export class ClientesListado {
  respuestaClientes = input<ClientesResponse | null>();
  clienteSeleccionado = output<Cliente>();

  onClienteClick(cliente: Cliente) {
    this.clienteSeleccionado.emit(cliente);
  }
}
