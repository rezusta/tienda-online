import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { ProductosPage } from './features/productos/pages/productos-page/productos-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ProductosPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda-online');
}
