import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes-listado-filtro',
  imports: [FormsModule],
  templateUrl: './clientes-listado-filtro.html',
  styleUrl: './clientes-listado-filtro.css',
})
export class ClientesListadoFiltro {
  filtroNombre: string = '';

  filtroCliente = output<string | null>();

  limpiar() {
    this.filtroNombre = '';
    this.filtroCliente.emit(null);
  }

  buscar() {
    this.filtroCliente.emit(this.filtroNombre);
  }
}
