import { Component, computed, inject, input, Signal } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { ClientesListado } from '../../components/clientes-listado/clientes-listado';
import { ClientesListadoFiltro } from '../../components/clientes-listado-filtro/clientes-listado-filtro';
import { CLIENTES_MOCK } from '../../data/clientes.mock';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-clientes-page',
  imports: [ClientesListado, ClientesListadoFiltro, AsyncPipe],
  templateUrl: './clientes-page.html',
  styleUrl: './clientes-page.css',
})
export class ClientesPage {
  router = inject(Router);

  servicioClientes = inject(ClientesService);

  respuestaClientes = this.servicioClientes.getClientes();

  seleccionDeCliente(cliente: Cliente) {
    this.router.navigate(['/clientes', cliente.id]);
  }

  filtraClientes(filtro: string | null) {
    this.router.navigate(['/clientes'], {
      queryParams: { nombre: filtro || null }
    })
  }
}
