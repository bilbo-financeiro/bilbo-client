import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  public authentication(email: string, password: string) {
    const result = this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    console.log(result);

    // try {
      // if (result) {
      //   this.router.navigate(['/pages']);
      // }
    // } catch (e) {
      // console.log(e);
    // }
  }

}
