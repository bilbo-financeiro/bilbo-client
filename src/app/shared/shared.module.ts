import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DropdownComponent,
    RouterModule
  ],
})
export class SharedModule { }
