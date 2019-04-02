import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

const ROUTE: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'overview', loadChildren: '../modules/overview/overview.module#OverviewModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
