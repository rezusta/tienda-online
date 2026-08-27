import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ProductoForm } from '../../models/producto-form.interface';

@Component({
  selector: 'app-producto-crear-page',
  imports: [FormField],
  templateUrl: './producto-crear-page.html',
  styleUrl: './producto-crear-page.css',
})
export class ProductoCrearPage {
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

  productoForm = form(this.productoModel);
}
