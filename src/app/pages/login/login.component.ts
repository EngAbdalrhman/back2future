import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { LoginService } from '../../common/login.service';
import { FormsModule } from '@angular/forms';
import { __await } from 'tslib';

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
  constructor(private _login: LoginService) {}
  binary: boolean = false;
  postingBackEnd = false;
  async handleLogin() {
    this.postingBackEnd = true;
    let body = {
      userName: this.username,
      pwd: this.password,
    };
    try {
      await this._login.logMe(body, this.binary);

      if (!this._login.isLogin) {
        alert('UserName or Password is incorrect');
        this.password = '';
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    } finally {
      this.postingBackEnd = false;
    }
  }
}
