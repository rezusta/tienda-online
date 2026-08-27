import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { disabled, form, FormField, hidden, required } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule, FormField],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  router = inject(Router);

  loginModel = signal({
    user: '',
    pass: ''
  })

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.user, { message: 'El usuario es obligatorio' });
    required(schemaPath.pass, { message: 'La contraseña es obligatoria' });
    disabled(schemaPath.pass, { when: ({valueOf}) => !valueOf(schemaPath.user) });
  });

  login() {
    console.log(this.loginModel());
    console.log(this.loginForm().value());
  }
}
