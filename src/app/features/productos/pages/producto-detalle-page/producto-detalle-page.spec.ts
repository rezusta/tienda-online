import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetallePage } from './producto-detalle-page';

describe('ProductoDetallePage', () => {
  let component: ProductoDetallePage;
  let fixture: ComponentFixture<ProductoDetallePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoDetallePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoDetallePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
