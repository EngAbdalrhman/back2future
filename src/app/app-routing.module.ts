import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuard } from './common/authentication.guard';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [authenticationGuard],
    children: [
      {
        path: 'designer',
        loadChildren: () =>
          import('./pages/home/chart/chart.module').then((m) => m.ChartModule),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/home/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: 'main',
        loadComponent: () =>
          import('./pages/home/main/main.component').then(
            (m) => m.MainComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./pages/user-management/user-management.component').then(
            (m) => m.UserManagementComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main',
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/error/error.component').then((m) => m.ErrorComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
