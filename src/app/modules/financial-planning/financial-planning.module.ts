import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialPlanningComponent } from './financial-planning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: '',
    component: FinancialPlanningComponent
  }
];

@NgModule({
  declarations: [FinancialPlanningComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FinancialPlanningModule { }
