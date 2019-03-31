import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { PagesModule } from '../pages/pages.module';
import { LoginModule } from './../modules/security/login/login.module';
import { NotFoundModule } from '../modules/not-found/not-found.module';

import { environment } from './../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    LoginModule,
    NotFoundModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    PagesModule,
    LoginModule,
    NotFoundModule,
    AngularFireDatabaseModule,
    AngularFireModule
  ]
})
export class CoreModule { }
