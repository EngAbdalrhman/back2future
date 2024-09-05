import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin: boolean = false;
  userName: string | null = '';
  constructor(public _router: Router) {
    if (localStorage.getItem('isLogin') == 'true') {
      this.isLogin = true;
      this.userName = localStorage.getItem('userName');
    }
  }
  logMe(
    userName: string,
    password: string,
    _router: Router,
    remember?: boolean
  ) {
    if (userName == 'admin' && password == 'admin') {
      this.isLogin = true;
      this.userName = userName;
      if (remember) {
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userName', userName);
      }
      this._router.navigate(['/home']);
    }
  }
  logOut() {
    this.isLogin = false;
    this.userName = '';
    localStorage.setItem('isLogin', 'false');
    localStorage.removeItem('userName');
    this._router.navigate(['/login']);
  }
}
