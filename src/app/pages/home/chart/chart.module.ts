import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { ShapeComponent } from './shape/shape.component';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ChartComponent, ShapeComponent],
  imports: [CommonModule, ChartRoutingModule, SplitterModule, ButtonModule],
})
export class ChartModule {}
