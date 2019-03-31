import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserManagementComponent } from './user-management.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProfileComponent } from './profile/profile.component';

const ROUTE: Routes = [
  {
    path: ':_id',
    component: UserManagementComponent,
    children: [
      { path: 'preferences', component: PreferencesComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE)
  ],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
