import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosListadoFiltro } from './productos-listado-filtro';

describe('ProductosListadoFiltro', () => {
  let component: ProductosListadoFiltro;
  let fixture: ComponentFixture<ProductosListadoFiltro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosListadoFiltro],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosListadoFiltro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
