import { Component, inject, input, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Cliente } from '../../models/cliente.interface';
import { ClientesListado } from '../../components/clientes-listado/clientes-listado';
import { ClientesListadoFiltro } from '../../components/clientes-listado-filtro/clientes-listado-filtro';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes-service';
import { ClientesListadoPaginacion } from '../../components/clientes-listado-paginacion/clientes-listado-paginacion';

@Component({
  selector: 'app-clientes-page',
  imports: [ClientesListado, ClientesListadoFiltro, ClientesListadoPaginacion],
  templateUrl: './clientes-page.html',
  styleUrl: './clientes-page.css',
})
export class ClientesPage {
  filtroNombre = input<string>();
  pagina = input<number>();
  itemsPorPagina = 10;

  router = inject(Router);

  servicioClientes = inject(ClientesService);

  recursoCambioFiltro = rxResource({
    params: () => ({
      filtroNombre: this.filtroNombre() ?? '', 
      pagina: this.pagina() ?? 1
    }),
    stream: ({ params }) => {
      const skip = (params.pagina - 1) * this.itemsPorPagina;
      return this.servicioClientes.getClientes(params.filtroNombre, this.itemsPorPagina, skip);
    }
  });

  cargandoClientes = this.recursoCambioFiltro.isLoading;
  errorClientes = this.recursoCambioFiltro.error;
  respuestaClientes = this.recursoCambioFiltro.value;
   
  cambioPagina(pagina: number) {
    this.router.navigate(['/clientes'], {
      queryParams: { pagina: pagina },
      queryParamsHandling: 'merge'
    });
  }

  filtraClientes(filtroNombre: string | null) {
    this.router.navigate(['/clientes'], {
      queryParams: { filtroNombre: filtroNombre || null },
      queryParamsHandling: 'merge'
    })
  }
  
  seleccionDeCliente(cliente: Cliente) {
    this.router.navigate(['/clientes', cliente.id]);
  }

}
