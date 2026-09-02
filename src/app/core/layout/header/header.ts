import { Component, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = "Tienda Online";

  authService = inject(AuthService);

  autenticado = this.authService.estaAutenticado;
  esEditor = this.authService.esUsuarioEditor;
  nombreUsuarioAutenticado = this.authService.nombreUsuarioAutenticado;
  
  logout = output();
}
