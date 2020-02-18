import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(
    private db: AngularFirestore
  ) { }

  getDataMusic() {
    return this.db.collection('files').snapshotChanges();
  }
}
