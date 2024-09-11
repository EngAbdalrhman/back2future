import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { colInfo } from './colInfo';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    TableModule,
    SkeletonModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RippleModule,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  @Input()
  Data: any[] = [{}];
  @Input()
  isLoading = true;
  @Input()
  colInfo: colInfo[] = [];
  constructor() {}
  // use EventEmitter
  @Output()
  Refresh = new EventEmitter();
  @Output()
  Add = new EventEmitter();
  @Output()
  Edit = new EventEmitter();
  @Output()
  Delete = new EventEmitter();

  refresh() {
    this.Refresh.emit();
  }
  showDialog() {
    this.Add.emit();
  }
  deleteDialog(row: any) {
    this.Delete.emit(row);
  }
  editDialog(row: any) {
    this.Edit.emit(row);
  }
}
