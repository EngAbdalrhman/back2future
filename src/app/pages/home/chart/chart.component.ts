import { Component } from '@angular/core';
import { ShapeInfo } from './shape/shapeInfo';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  shapes: ShapeInfo[] = [];
  toolList: ShapeInfo[] = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'green' },
  ];
  constructor() {}
}
