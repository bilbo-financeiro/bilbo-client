import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const ROUTE: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', loadChildren: '../modules/overview/overview.module#OverviewModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE)
  ]
})
export class PagesRoutingModule { }
