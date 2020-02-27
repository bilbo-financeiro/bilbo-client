import { NumberComponent } from './components/number/number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from './components/text/text.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
    ButtonComponent,
    TextComponent,
    NumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DropdownComponent,
    ButtonComponent,
    TextComponent,
    NumberComponent
  ],
})
export class SharedModule { }
