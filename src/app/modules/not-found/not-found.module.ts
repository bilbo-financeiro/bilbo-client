import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';

const ROUTES: Routes = [
  {
    path: '',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class NotFoundModule { }
