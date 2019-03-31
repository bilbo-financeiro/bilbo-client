import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management.module.routing';

import { UserManagementComponent } from './user-management.component';
import { ProfileComponent } from './profile/profile.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    UserManagementComponent,
    ProfileComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
