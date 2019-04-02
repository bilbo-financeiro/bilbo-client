import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.module.routing';
import { PageComponentsModule } from './components/components.module';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    PageComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
