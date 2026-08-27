export interface ProductoForm {
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  stock: number;
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsForm;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  thumbnail: string;
}

export interface DimensionsForm {
  width: number;
  height: number;
  depth: number;
}
