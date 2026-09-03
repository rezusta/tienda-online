import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { ProductosService } from "./productos-service";
import { TestBed } from "@angular/core/testing";

describe('ProductosService', () => {
    let service: ProductosService;
    let httpTesting: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClientTesting()]
        });

        service = TestBed.inject(ProductosService);
        httpTesting = TestBed.inject(HttpTestingController);
    });

    it('Solicita productos usando el texto de filtro como parámetro q', () => {

        service.getProductos('filtroPrueba').subscribe((response) => {
            expect(response).toEqual({ products: [] });
        });

        const request = httpTesting.expectOne('https://dummyjson.com/products/search?q=filtroPrueba');

        expect(request.request.method).toBe('GET');
        expect(request.request.params.get('q')).toBe('filtroPrueba');

        request.flush({ products: [] });
        
    });
})