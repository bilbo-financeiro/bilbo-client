import { Observable } from 'rxjs';

export interface DeactiveFormInterface {
  canDeactivateForm: () => Observable<boolean> | Promise<boolean> | boolean;
}
