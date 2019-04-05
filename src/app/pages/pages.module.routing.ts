import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AuthGuardService } from '../@core/guards/auth.guard';

const ROUTE: Routes = [
  {
    path: 'login',
    loadChildren: '../modules/security/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: '../modules/signup/signup.module#SignupModule'
  },
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', loadChildren: '../modules/overview/overview.module#OverviewModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class PagesRoutingModule { }
