import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Cliente } from '../../models/cliente.interface';
import { ClientesListado } from '../../components/clientes-listado/clientes-listado';
import { ClientesListadoFiltro } from '../../components/clientes-listado-filtro/clientes-listado-filtro';
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
  filtroNombre = input<string>();

  router = inject(Router);

  servicioClientes = inject(ClientesService);

  recursoCambioFiltro = rxResource({
    params: () => ({ filtroNombre: this.filtroNombre()}),
    stream: ({ params }) => this.servicioClientes.getClientes(params.filtroNombre || '')
  })

  cargandoClientes = this.recursoCambioFiltro.isLoading;
  errorClientes = this.recursoCambioFiltro.error;
  respuestaClientes = this.recursoCambioFiltro.value;
    
  seleccionDeCliente(cliente: Cliente) {
    this.router.navigate(['/clientes', cliente.id]);
  }

  filtraClientes(filtroNombre: string | null) {
    this.router.navigate(['/clientes'], {
      queryParams: { filtroNombre: filtroNombre || null }
    })
  }
}
