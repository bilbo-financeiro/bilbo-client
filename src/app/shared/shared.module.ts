import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdownComponent,
    ButtonComponent
  ],
})
export class SharedModule { }
