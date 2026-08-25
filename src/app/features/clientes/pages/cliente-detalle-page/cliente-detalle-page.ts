import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
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
  
  recursoCliente = rxResource({
    params: () => ({ idCliente: this.id()}),
    stream: ({ params }) => this.servicioClientes.getCliente(params.idCliente!)
  })

  cliente = this.recursoCliente.value;
  cargandoCliente = this.recursoCliente.isLoading;
  errorCliente = this.recursoCliente.error;
  
}
