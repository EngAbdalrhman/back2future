import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart.component';

const routes: Routes = [
  {
    path: '**',
    component: ChartComponent,
    // loadComponent() {
    //   return import('./chart.component').then((m) => m.ChartComponent);
    // },
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'chart',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartRoutingModule {}
