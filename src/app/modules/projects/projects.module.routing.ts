import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';

const ROUTE: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule { }
