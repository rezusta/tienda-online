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
  router = inject(Router);

  user: string = '';
  pass: string = '';

  login() {
    // Llamo al servidor de autenticación con user y pass.
    this.router.navigate(['productos']);
  }
}
