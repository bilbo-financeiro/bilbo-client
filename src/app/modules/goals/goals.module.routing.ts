import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoalsComponent } from './goals.component';

const ROUTES: Routes = [
  {
    path: '',
    component: GoalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class GoalsRoutingModule { }
