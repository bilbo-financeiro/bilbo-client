import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { PagesModule } from '../pages/pages.module';
import { LoginModule } from './../modules/security/login/login.module';
import { NotFoundModule } from '../modules/not-found/not-found.module';

import { environment } from './../../environments/environment';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    LoginModule,
    NotFoundModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [
    PagesModule,
    LoginModule,
    NotFoundModule,
    AngularFireDatabaseModule,
    AngularFireModule
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
