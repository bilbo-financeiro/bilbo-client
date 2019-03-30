import { LoginModule } from './../modules/security/login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModule } from '../pages/pages.module';
import { NotFoundModule } from '../modules/not-found/not-found.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    LoginModule,
    NotFoundModule
  ],
  exports: [
    PagesModule,
    PagesModule,
    LoginModule,
    NotFoundModule
  ]
})
export class CoreModule { }
