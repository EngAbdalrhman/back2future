import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from './login.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const _loginService = inject(LoginService);
  if (!_loginService.isLogin) {
    _loginService._router.navigate(['/login']);
    return false;
  }
  return true;
};
