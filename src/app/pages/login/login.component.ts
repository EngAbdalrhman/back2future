import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { LoginService } from '../../common/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CheckboxModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private _login: LoginService, private _router: Router) {}
  binary: boolean = false;
  handleLogin() {
    this._login.logMe(this.username, this.password, this._router, this.binary);
    // console.log(this.username);
    // console.log(this.password);
    // console.log(this.binary);
    if (!this._login.isLogin) {
      alert('UserName or Password is incorrect');
      this.password = '';
    }
  }
}
