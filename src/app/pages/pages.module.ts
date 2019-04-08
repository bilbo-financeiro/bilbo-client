import { NgModule } from '@angular/core';

import { CoreModule } from '../@core/core.module';
import { PagesRoutingModule } from './pages.module.routing';
import { PageComponentsModule } from './components/components.module';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    BrowserAnimationsModule,
    PagesRoutingModule,
    PageComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
