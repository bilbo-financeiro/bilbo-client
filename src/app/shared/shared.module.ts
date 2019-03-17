import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [HeaderMenuComponent, DropdownComponent],
  exports: [HeaderMenuComponent, DropdownComponent],
  imports: [CommonModule],
})
export class SharedModule { }
