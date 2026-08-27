import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoForm } from '../../models/producto-form.interface';
import { ProductoFormComponent } from '../../components/producto-form/producto-form';

@Component({
  selector: 'app-producto-crear-page',
  imports: [ProductoFormComponent],
  templateUrl: './producto-crear-page.html',
  styleUrl: './producto-crear-page.css',
})
export class ProductoCrearPage {
  private readonly router = inject(Router);

  cancelar(): void {
    void this.router.navigate(['/productos']);
  }

  guardarProducto(producto: ProductoForm): void {
    console.log('Producto listo para guardar', producto);
  }
}
