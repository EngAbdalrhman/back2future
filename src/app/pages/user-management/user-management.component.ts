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
import { GridComponent } from '../../components/grid/grid.component';
import { colInfo } from '../../components/grid/colInfo';

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
    GridComponent,
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
})
export class UserManagementComponent implements OnInit {
  userData: any[] = [{}];
  isLoading = true;
  isEdit = false;
  isDelete = false;
  colInfo: colInfo[] = [
    { fieldName: 'Code', headerCaption: '#' },
    { fieldName: 'Full Name', headerCaption: 'Full Name' },
    { fieldName: 'Username', headerCaption: 'Username' },
    { fieldName: 'Password', headerCaption: 'Password' },
    { fieldName: 'Email', headerCaption: 'Email' },
    { fieldName: '', headerCaption: '' },
    { fieldName: '', headerCaption: '' },
  ];
  dialogVisible: boolean = false;
  user = {
    id: 0,
    userName: '',
    password: '',
    fullName: '',
    email: '',
  };
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
    console.log(this.user);
    let body = {
      userName: this.user.userName,
      password: this.user.password,
      fullName: this.user.fullName,
      email: this.user.email,
    };
    this._http.post('/rest/user/insert', body).subscribe((data: any) => {
      console.log(data);
      this.refresh();
    });
    this.dialogVisible = false;
    this.user = {
      id: 0,
      userName: '',
      password: '',
      fullName: '',
      email: '',
    };
  }
  showDialog() {
    this.dialogVisible = true;
  }
  editUserDialog(row: any) {
    this.isEdit = true;
    this.dialogVisible = true;
    // this.id = row.id;
    this.user = { ...row };
  }
  editUser() {
    console.log(this.user);
    this._http.post('/apis/user/update', this.user).subscribe((data: any) => {
      console.log(data);
      this.refresh();
    });
    this.dialogVisible = false;
    this.user = {
      id: 0,
      userName: '',
      password: '',
      fullName: '',
      email: '',
    };
  }
  deleteUserDialog(row: any) {
    this.isDelete = true;
    this.user = { ...row };
  }
  deleteUser() {
    console.log(this.user);
    this._http.post('/apis/user/delete', this.user).subscribe((data: any) => {
      console.log(data);
      this.refresh();
    });
    this.isDelete = false;
    this.user = {
      id: 0,
      userName: '',
      password: '',
      fullName: '',
      email: '',
    };
  }
}
