import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs';

import { DeactiveFormInterface } from '../models/deactive-form.model';

@Injectable()
export class FormCanDeactivateGuard implements CanDeactivate<DeactiveFormInterface> {
  canDeactivate(component: DeactiveFormInterface): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivateForm ? component.canDeactivateForm() : true;
  }
}
