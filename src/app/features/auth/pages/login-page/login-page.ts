import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  user: string = '';
  pass: string = '';

  login() {
    console.log('Usuario:', this.user);
    console.log('Contraseña:', this.pass);
  }
}
