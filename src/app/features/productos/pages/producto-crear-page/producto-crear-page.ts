import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  form,
  FormField,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  required,
  submit,
} from '@angular/forms/signals';
import { ProductoForm } from '../../models/producto-form.interface';

@Component({
  selector: 'app-producto-crear-page',
  imports: [FormField],
  templateUrl: './producto-crear-page.html',
  styleUrl: './producto-crear-page.css',
})
export class ProductoCrearPage {
  private readonly router = inject(Router);
  readonly isSubmitting = signal(false);
  readonly submitted = signal(false);
  readonly productCreated = signal(false);

  productoModel = signal<ProductoForm>({
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    stock: 0,
    brand: '',
    sku: '',
    weight: 0,
    dimensions: {
      width: 0,
      height: 0,
      depth: 0,
    },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: 0,
    thumbnail: '',
  });

  productoForm = form(this.productoModel, (schemaPath) => {
    required(schemaPath.title, { message: 'El nombre es obligatorio' });
    minLength(schemaPath.title, 3, {
      message: 'El nombre debe tener al menos 3 caracteres',
    });
    maxLength(schemaPath.title, 120, {
      message: 'El nombre no puede superar los 120 caracteres',
    });

    required(schemaPath.description, { message: 'La descripción es obligatoria' });
    minLength(schemaPath.description, 20, {
      message: 'La descripción debe tener al menos 20 caracteres',
    });
    maxLength(schemaPath.description, 2000, {
      message: 'La descripción no puede superar los 2000 caracteres',
    });

    required(schemaPath.category, { message: 'La categoría es obligatoria' });
    maxLength(schemaPath.category, 60, {
      message: 'La categoría no puede superar los 60 caracteres',
    });
    required(schemaPath.brand, { message: 'La marca es obligatoria' });
    maxLength(schemaPath.brand, 80, {
      message: 'La marca no puede superar los 80 caracteres',
    });
    required(schemaPath.sku, { message: 'El SKU es obligatorio' });
    pattern(schemaPath.sku, /^[A-Z0-9]+(?:-[A-Z0-9]+)*$/, {
      message: 'Usa mayúsculas, números y guiones (ej. APP-IP15-256)',
    });
    maxLength(schemaPath.sku, 40, {
      message: 'El SKU no puede superar los 40 caracteres',
    });
    required(schemaPath.availabilityStatus, {
      message: 'La disponibilidad es obligatoria',
    });

    min(schemaPath.price, 0.01, { message: 'El precio debe ser mayor que 0' });
    max(schemaPath.price, 10_000_000, {
      message: 'El precio no puede superar 10.000.000 €',
    });
    min(schemaPath.discountPercentage, 0, {
      message: 'El descuento no puede ser negativo',
    });
    max(schemaPath.discountPercentage, 100, {
      message: 'El descuento debe estar entre 0 y 100',
    });
    min(schemaPath.stock, 0, { message: 'El stock no puede ser negativo' });
    min(schemaPath.minimumOrderQuantity, 1, {
      message: 'El pedido mínimo debe ser al menos 1',
    });

    min(schemaPath.weight, 0, { message: 'El peso no puede ser negativo' });
    min(schemaPath.dimensions.width, 0, {
      message: 'El ancho no puede ser negativo',
    });
    min(schemaPath.dimensions.height, 0, {
      message: 'El alto no puede ser negativo',
    });
    min(schemaPath.dimensions.depth, 0, {
      message: 'La profundidad no puede ser negativa',
    });

    required(schemaPath.warrantyInformation, {
      message: 'La garantía es obligatoria',
    });
    required(schemaPath.shippingInformation, {
      message: 'La información de envío es obligatoria',
    });
    required(schemaPath.returnPolicy, {
      message: 'La política de devolución es obligatoria',
    });
    required(schemaPath.thumbnail, { message: 'La URL de imagen es obligatoria' });
    pattern(schemaPath.thumbnail, /^https?:\/\/\S+$/i, {
      message: 'Introduce una URL de imagen válida',
    });
  });

  async crearProducto(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    this.submitted.set(true);

    if (this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    try {
      this.productCreated.set(
        await submit(this.productoForm, {
          action: async () => undefined,
        }),
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }

  cancelar(): void {
    void this.router.navigate(['/productos']);
  }
}
