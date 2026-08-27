import { Component, output, signal } from '@angular/core';
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
  selector: 'app-producto-form',
  imports: [FormField],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.css',
})
export class ProductoFormComponent {
  readonly cancelar = output<void>();
  readonly productoGuardado = output<ProductoForm>();
  readonly isSubmitting = signal(false);
  readonly submitted = signal(false);
  readonly productCreated = signal(false);

  readonly productoModel = signal<ProductoForm>({
    title: '',
    description: '',
    category: '',
    price: 0,
    discountPercentage: 0,
    stock: 0,
    brand: '',
    sku: '',
    weight: 0,
    dimensions: { width: 0, height: 0, depth: 0 },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: 0,
    thumbnail: '',
  });

  readonly productoForm = form(this.productoModel, (path) => {
    required(path.title, { message: 'El nombre es obligatorio' });
    minLength(path.title, 3, { message: 'El nombre debe tener al menos 3 caracteres' });
    maxLength(path.title, 120, { message: 'El nombre no puede superar los 120 caracteres' });
    required(path.description, { message: 'La descripción es obligatoria' });
    minLength(path.description, 20, { message: 'La descripción debe tener al menos 20 caracteres' });
    maxLength(path.description, 2000, { message: 'La descripción no puede superar los 2000 caracteres' });
    required(path.category, { message: 'La categoría es obligatoria' });
    maxLength(path.category, 60, { message: 'La categoría no puede superar los 60 caracteres' });
    required(path.brand, { message: 'La marca es obligatoria' });
    maxLength(path.brand, 80, { message: 'La marca no puede superar los 80 caracteres' });
    required(path.sku, { message: 'El SKU es obligatorio' });
    pattern(path.sku, /^[A-Z0-9]+(?:-[A-Z0-9]+)*$/, {
      message: 'Usa mayúsculas, números y guiones (ej. APP-IP15-256)',
    });
    maxLength(path.sku, 40, { message: 'El SKU no puede superar los 40 caracteres' });
    required(path.availabilityStatus, { message: 'La disponibilidad es obligatoria' });
    min(path.price, 0.01, { message: 'El precio debe ser mayor que 0' });
    max(path.price, 10_000_000, { message: 'El precio no puede superar 10.000.000 €' });
    min(path.discountPercentage, 0, { message: 'El descuento no puede ser negativo' });
    max(path.discountPercentage, 100, { message: 'El descuento debe estar entre 0 y 100' });
    min(path.stock, 0, { message: 'El stock no puede ser negativo' });
    min(path.minimumOrderQuantity, 1, { message: 'El pedido mínimo debe ser al menos 1' });
    min(path.weight, 0, { message: 'El peso no puede ser negativo' });
    min(path.dimensions.width, 0, { message: 'El ancho no puede ser negativo' });
    min(path.dimensions.height, 0, { message: 'El alto no puede ser negativo' });
    min(path.dimensions.depth, 0, { message: 'La profundidad no puede ser negativa' });
    required(path.warrantyInformation, { message: 'La garantía es obligatoria' });
    required(path.shippingInformation, { message: 'La información de envío es obligatoria' });
    required(path.returnPolicy, { message: 'La política de devolución es obligatoria' });
    required(path.thumbnail, { message: 'La URL de imagen es obligatoria' });
    pattern(path.thumbnail, /^https?:\/\/\S+$/i, {
      message: 'Introduce una URL de imagen válida',
    });
  });

  async enviar(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    this.submitted.set(true);
    if (this.isSubmitting()) return;

    this.isSubmitting.set(true);
    try {
      const valid = await submit(this.productoForm, {
        action: async () => undefined,
      });
      if (valid) {
        this.productCreated.set(true);
        this.productoGuardado.emit(this.productoModel());
      }
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
