import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private router = inject(Router);

  user: string = '';
  pass: string = '';

  login() {

    // Comprobar credenciales.
    // Si están ok, entonces navegamos a listado de productos
    this.router.navigate(['/productos']);

  }
}
