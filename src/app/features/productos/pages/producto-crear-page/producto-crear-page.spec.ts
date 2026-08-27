import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCrearPage } from './producto-crear-page';

describe('ProductoCrearPage', () => {
  let component: ProductoCrearPage;
  let fixture: ComponentFixture<ProductoCrearPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCrearPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoCrearPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
