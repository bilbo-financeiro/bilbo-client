import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects.module.routing';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
