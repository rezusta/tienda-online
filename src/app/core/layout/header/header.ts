import { Component, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../features/auth/services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = "Tienda Online";

  authService = inject(AuthService);
  
  userLogged = this.authService.user;
  isEditor = this.authService.isEditor;
  idLogged = this.authService.isAuthenticated;

  logout = output<void>();
}
