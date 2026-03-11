import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'exectivid',
    loadComponent: () => import('./exectivid/pages/exectivid-page/exectivid-page'),
    loadChildren: () => import('./exectivid/pages/album.routes'),
  },
  {
    path: 'welcome',
    loadComponent: () => import('./exectivid/components/welcome/welcome'),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  }
];
