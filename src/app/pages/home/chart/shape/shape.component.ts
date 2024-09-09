import { Component, Input } from '@angular/core';
import { ShapeInfo } from './shapeInfo';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.scss',
})
export class ShapeComponent {
  @Input()
  shapeData: ShapeInfo | undefined;

  @Input()
  set setShapeData(shapeData: ShapeInfo) {
    //this.shapeData = shapeData;
    if (shapeData) {
      this.label = shapeData.label || this.label;
      this.x = shapeData.x || this.x;
      this.y = shapeData.y || this.y;
      this.width = shapeData.width || this.width;
      this.height = shapeData.height || this.height;
      this.color = shapeData.color || this.color;
      this.font_color = shapeData.font_color || this.font_color;
    }
  }

  label: string = '';
  x: number = 0;
  y: number = 0;
  width: number = 100;
  height: number = 100;
  color: string = 'orangered';
  font_color: string = 'white';
}
