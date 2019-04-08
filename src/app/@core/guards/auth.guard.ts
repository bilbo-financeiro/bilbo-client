import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public async canActivate() {
    const isAuth = this.authService.verifyAutenthication();

    if (!isAuth) {
      this.router.navigate(['login']);
    }

    return isAuth;
  }

}
