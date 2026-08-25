import { Component, computed, inject, input, OnInit, resource, Signal } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { ClientesListado } from '../../components/clientes-listado/clientes-listado';
import { ClientesListadoFiltro } from '../../components/clientes-listado-filtro/clientes-listado-filtro';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes-service';
import { AsyncPipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-clientes-page',
  imports: [ClientesListado, ClientesListadoFiltro, AsyncPipe],
  templateUrl: './clientes-page.html',
  styleUrl: './clientes-page.css',
})
export class ClientesPage {
  nombre = input<string>();

  router = inject(Router);

  servicioClientes = inject(ClientesService);

  recursoCambioFiltro = resource({
    params: () => ({ nombre: this.nombre()}),
    loader: ({ params }) => firstValueFrom(this.servicioClientes.getClientes(params.nombre || ''))
  })

  respuestaClientes = computed(() => { 
    return this.recursoCambioFiltro.value()
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
