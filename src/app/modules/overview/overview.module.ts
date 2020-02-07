import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OverviewModule { }
