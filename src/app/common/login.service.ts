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
  sessionToken: string | null = '';
  constructor(public _router: Router, private http: HttpClient) {
    if (
      localStorage.getItem('session') != null &&
      localStorage.getItem('session')!.length > 0
    ) {
      this.sessionToken = localStorage.getItem('session');
      this.http
        .post('/rest/verify', this.sessionToken)
        .subscribe((data: any) => {
          if (data.status == 'success') {
            this.isLogin = true;
            this.userName = data._fullName;
            this._router.navigate(['/home']);
          } else {
            this.sessionToken = null;
          }
        });
    }
  }
  logMe(
    body: { userName: string; pwd: string },
    remember?: boolean
  ): Promise<void> {
    let userName = body.userName;
    // body = JSON.stringify(body);
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body).subscribe(
        (data: any) => {
          if (data.status == 'success') {
            this.isLogin = true;
            this.userName = userName;
            if (remember) {
              localStorage.setItem('session', data.sessionToken);
              this.sessionToken = data.sessionToken;
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
    localStorage.removeItem('session');
    this._router.navigate(['/login']);
  }
}
