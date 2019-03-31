import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class SignupModule { }
