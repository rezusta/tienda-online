import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.interface';
import { CLIENTES_MOCK } from '../../data/clientes.mock';

@Component({
  selector: 'app-cliente-detalle-page',
  imports: [],
  templateUrl: './cliente-detalle-page.html',
  styleUrl: './cliente-detalle-page.css',
})
export class ClienteDetallePage {
  cliente: Cliente = CLIENTES_MOCK[1];
}
