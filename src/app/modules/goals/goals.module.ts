import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsRoutingModule } from './goals.module.routing';
import { GoalsComponent } from './goals.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    ReactiveFormsModule
  ]
})
export class GoalsModule { }
