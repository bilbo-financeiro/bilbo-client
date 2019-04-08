import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) { }

  public async authentication(email: string, password: string) {
    await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public async logout() {
    await this.angularFireAuth.auth.signOut();
  }

  public isAuth(): Observable<auth.IdTokenResult | null> {
    return this.angularFireAuth.idTokenResult;
  }

}
