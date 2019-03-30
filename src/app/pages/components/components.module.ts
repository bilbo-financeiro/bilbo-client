import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    SideMenuComponent
  ],
  exports: [
    HeaderMenuComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PageComponentsModule { }
