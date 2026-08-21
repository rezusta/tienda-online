import { Component, computed, inject, input, resource, Signal } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { firstValueFrom } from 'rxjs';
import { ClientesService } from '../../services/clientes-service';

@Component({
  selector: 'app-cliente-detalle-page',
  imports: [],
  templateUrl: './cliente-detalle-page.html',
  styleUrl: './cliente-detalle-page.css',
})
export class ClienteDetallePage {
  id = input<number>()
  servicioClientes = inject(ClientesService);

  clienteResource = resource({
      params: () => ({id: this.id()}),
      loader: ({params}) => firstValueFrom(this.servicioClientes.getCliente(params.id!)),
    });

  cliente: Signal<Cliente> = computed(() => {
    return this.clienteResource.value()!;
  });
}
