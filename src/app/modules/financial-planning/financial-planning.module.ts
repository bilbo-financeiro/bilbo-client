import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialPlanningComponent } from './financial-planning.component';

const ROUTES: Routes = [
  {
    path: '',
    component: FinancialPlanningComponent
  }
];

@NgModule({
  declarations: [FinancialPlanningComponent],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class FinancialPlanningModule { }
