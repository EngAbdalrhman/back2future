import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [TableModule, SkeletonModule, HttpClientModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
  // providers: [provideHttpClient()],
})
export class UserManagementComponent implements OnInit {
  userData: any[] = [{}];
  isLoading = true;

  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    this.isLoading = true;
    // http://localhost:8080/apis/users - http://127.0.0.1:8080
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
}
