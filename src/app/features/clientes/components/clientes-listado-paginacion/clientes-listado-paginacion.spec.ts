import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesListadoPaginacion } from './clientes-listado-paginacion';

describe('ClientesListadoPaginacion', () => {
  let component: ClientesListadoPaginacion;
  let fixture: ComponentFixture<ClientesListadoPaginacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesListadoPaginacion],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesListadoPaginacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
