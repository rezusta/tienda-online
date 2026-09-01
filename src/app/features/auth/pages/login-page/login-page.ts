import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { disabled, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { Router, ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [FormField, FormRoot],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);

  readonly loginModel = signal({
    user: '',
    pass: '',
  });

  readonly loginForm = form(
    this.loginModel,
    (schemaPath) => {
      required(schemaPath.user, { message: 'El usuario es obligatorio' });
      required(schemaPath.pass, { message: 'La contraseña es obligatoria' });
      disabled(schemaPath.pass, { when: ({ valueOf }) => !valueOf(schemaPath.user) });
    },
    {
      submission: {
        action: async (fields) => {
          try {
            await firstValueFrom(this.authService.login(fields().value()));
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/productos';
            await this.router.navigateByUrl(returnUrl);
            return;
          } catch (error: unknown) {
            const message = error instanceof HttpErrorResponse ? error.error?.message ?? error.error?.message : 'No se ha podido iniciar sesión';

            return {
              kind: 'credentials',
              message,
              fieldTree: fields.pass,
            };
          }
        },
      },
    }
  );
}
