import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Añade el token de sesión a las peticiones dirigidas a la API mock. */
export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  const token = authService.token();

  if (!token || (!req.url.startsWith('/api/') && !req.url.startsWith('https://dummyjson.com/'))) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    })
  ).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {
        const returnUrl = router.url;

        authService.logout();

        router.navigate(['/login'], {
          queryParams: { returnUrl }
        });
      }

      if (error.status === 403) {
        // Hay sesión, pero no permisos para esta operación
        snackBar.open(
          'No tienes permisos para realizar esta operación',
          'Cerrar',
          { duration: 5000 }
        );
      }

      return throwError(() => error);
    })
  );
};
