import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview.component';

const ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class OverviewModule { }
