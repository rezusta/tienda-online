import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-listado-filtro',
  imports: [FormsModule],
  templateUrl: './productos-listado-filtro.html',
  styleUrl: './productos-listado-filtro.css',
})
export class ProductosListadoFiltro {
  filtroNombre: string = '';

  filtroProducto = output<string>();
  
  limpiar() {
    this.filtroNombre = '';
  }

  buscar() {
    this.filtroProducto.emit(this.filtroNombre);
  }
}
