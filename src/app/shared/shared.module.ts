import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
@NgModule({
  declarations: [
    HeaderMenuComponent,
    DropdownComponent,
    SideMenuComponent
  ],
  exports: [
    HeaderMenuComponent,
    DropdownComponent,
    SideMenuComponent,
    RouterModule
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule { }
