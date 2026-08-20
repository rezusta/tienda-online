import { Component, computed, input, Signal } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { CLIENTES_MOCK } from '../../data/clientes.mock';

@Component({
  selector: 'app-cliente-detalle-page',
  imports: [],
  templateUrl: './cliente-detalle-page.html',
  styleUrl: './cliente-detalle-page.css',
})
export class ClienteDetallePage {
  id = input.required<number>();

  cliente: Signal<Cliente> = computed(() => CLIENTES_MOCK.find((c) => c.id == this.id())!);
}
