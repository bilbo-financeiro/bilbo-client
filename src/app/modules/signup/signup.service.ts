import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';

import { User } from 'src/app/@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  insert(user: User) {
    this.db.list('user').push(user);
  }

  update(user: User, key: string) {
    this.db.list('user').update(key, user);
  }

  getAll() {
    return this.db.list('user')
      .snapshotChanges()
      .pipe(
        map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      );
  }

  delete(key: string) {
    this.db.object(`user/${key}`).remove();
  }

}

