import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { LoginPage } from './features/auth/pages/login-page/login-page';
import { ClientesPage } from './features/clientes/pages/clientes-page/clientes-page';
import { ClienteDetallePage } from './features/clientes/pages/cliente-detalle-page/cliente-detalle-page';
import { ProductoDetallePage } from './features/productos/pages/producto-detalle-page/producto-detalle-page';
import { ProductosPage } from './features/productos/pages/productos-page/productos-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ClientesPage, LoginPage, ClienteDetallePage, ProductosPage, ProductoDetallePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda-online');
}
