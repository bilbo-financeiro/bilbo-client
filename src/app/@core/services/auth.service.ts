import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public tolken: any

  constructor(
    private angularFireAuth: AngularFireAuth,
  ) { }

  public async authentication(email: string, password: string) {
    await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    await this.angularFireAuth.idTokenResult.subscribe((tolken) => this.tolken = tolken);
    return this.verifyAutenthication();
  }

  public async logout() {
    await this.angularFireAuth.auth.signOut();
    await this.angularFireAuth.idTokenResult.subscribe((tolken) => this.tolken = tolken);
    return this.verifyAutenthication();
  }

  public verifyAutenthication(): boolean {
    return this.tolken ? true : false;
  }
}
