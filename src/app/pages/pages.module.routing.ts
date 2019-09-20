import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AuthGuardService } from '../@core/guards/auth.guard';

const ROUTE: Routes = [
  {
    path: 'login',
    loadChildren: '../modules/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: '../modules/signup/signup.module#SignupModule'
  },
  {
    path: 'pages',
    pathMatch: 'prefix',
    component: PagesComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', loadChildren: '../modules/overview/overview.module#OverviewModule' },
      { path: 'planning', loadChildren: '../modules/financial-planning/financial-planning.module#FinancialPlanningModule' },
      { path: 'projects', pathMatch: 'prefix', loadChildren: '../modules/projects/projects.module#ProjectsModule' },
      { path: 'user', loadChildren: '../modules/user-management/user-management.module#UserManagementModule' },
      { path: 'goals', loadChildren: '../modules/goals/goals.module#GoalsModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class PagesRoutingModule { }
