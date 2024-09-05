import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = '/rest/login';
  isLogin: boolean = false;
  userName: string | null = '';
  constructor(public _router: Router, private http: HttpClient) {
    if (localStorage.getItem('isLogin') == 'true') {
      this.isLogin = true;
      this.userName = localStorage.getItem('userName');
    }
  }
  logMe(
    body: { userName: string; pwd: string },
    remember?: boolean
  ): Promise<void> {
    let userName = body.userName;
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body).subscribe(
        (data: any) => {
          if (data.status == 'success') {
            this.isLogin = true;
            this.userName = userName;
            if (remember) {
              localStorage.setItem('isLogin', 'true');
              localStorage.setItem('userName', userName);
            }
            this._router.navigate(['/home']);
          }
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  logOut() {
    this.isLogin = false;
    this.userName = '';
    localStorage.setItem('isLogin', 'false');
    localStorage.removeItem('userName');
    this._router.navigate(['/login']);
  }
}
