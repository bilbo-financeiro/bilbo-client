import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  public async authentication(email: string, password: string) {
    await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public async logout() {
    await this.angularFireAuth.auth.signOut();
  }

  public async isAuth() {
    return await (this.angularFireAuth.idTokenResult as Observable<any>)
      .subscribe((item) => {
          if (item) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
      });
  }

}
