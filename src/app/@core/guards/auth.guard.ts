import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  public canActivate() {
    return this.angularFireAuth.idTokenResult
      .pipe(
        map((tolken) => this.redirectForLogin(tolken))
      );
  }

  public redirectForLogin(tolken): boolean {
    if (!tolken) {
      this.router.navigate(['login']);
    }
    return tolken ? true : false;
  }

}
