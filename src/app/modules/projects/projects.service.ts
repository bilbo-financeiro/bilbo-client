import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private db: AngularFireDatabase) { }

    insert(wish: Wish) {
    this.db.list('wish').push(wish);
  }

  update(wish: Wish, key: string) {
    this.db.list('wish').update(key, wish);
  }

  getAll() {
    return this.db.list('wish')
      .snapshotChanges()
      .pipe(
        map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      );
  }

  delete(key: string) {
    this.db.object(`wish/${key}`).remove();
  }

}

interface Wish {
  name: string;
  value: number;
}
