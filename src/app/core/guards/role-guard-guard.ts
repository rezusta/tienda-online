import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth-service';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const isEditor = authService.isEditor();

  if (isEditor) {
    return true;
  }

  return false;
};
