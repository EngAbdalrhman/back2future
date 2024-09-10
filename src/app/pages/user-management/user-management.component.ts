import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    TableModule,
    SkeletonModule,
    HttpClientModule,
    CommonModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    RippleModule,
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
  // providers: [provideHttpClient()],
})
export class UserManagementComponent implements OnInit {
  userData: any[] = [{}];
  isLoading = true;
  dialogVisible: boolean = false;
  username: string = '';
  password: string = '';
  fullname: string = '';
  email: string = '';
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this.isLoading = true;
    // http://localhost:8080/apis/users - http://127.0.0.1:8080
    this.loadData();
  }

  loadData() {
    this._http.get('/apis/users').subscribe(
      (data: any) => {
        console.log(data);
        this.userData = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  refresh() {
    this.isLoading = true;
    this.loadData();
  }
  addUser() {
    let body = {
      userName: this.username,
      password: this.password,
      fullName: this.fullname,
      email: this.email,
    };
    console.log(body);
    debugger;
    this._http.post('/rest/user/insert', body).subscribe((data: any) => {
      debugger;
      console.log(data);
      this.refresh();
    });
    this.dialogVisible = false;
  }
  showDialog() {
    this.dialogVisible = true;
  }
}
