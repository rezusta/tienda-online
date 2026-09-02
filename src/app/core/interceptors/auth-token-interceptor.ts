import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.session()?.token;
  const router = inject(Router);

  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status == 401) {
        const urlActual = router.url;

        authService.logout();

        router.navigate(['/login'], {
          queryParams: { urlActual }
        });
      }

      throw error;
    })
  );
};
