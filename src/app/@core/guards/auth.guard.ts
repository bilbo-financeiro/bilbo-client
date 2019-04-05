import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public canActivate(): boolean {
    if (this.authService.isAuth()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

}
