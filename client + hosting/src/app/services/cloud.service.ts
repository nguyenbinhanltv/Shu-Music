import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  index = -1;
  currentFile: any = {};
  files: Array<any> = [];

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
  ) { }

  getMusicData(typeMusic) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.http.get(environment.apiEndpoint + `${typeMusic}`).toPromise();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getVideoData(typeVideo) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.http.get(environment.apiEndpoint + `${typeVideo}`).toPromise();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getLikedSongData(user) {
    if (user) {
      return this.db.doc(`users/${user.uid}`).collection('likedsong').snapshotChanges();
    }
  }

  updateLikedSongData(user, file) {
    const userRef = this.db.firestore.doc(`users/${user.uid}`).collection('likedsong');
    return userRef.add(file);
  }

  deleteLikeSongData(user, id) {
    const userRef = this.db.doc(`users/${user.uid}`).collection('likedsong').doc(id);
    return userRef.delete();
  }

  getLikedVideoData(user) {
    if (user) {
      return this.db.doc(`users/${user.uid}`).collection('likedvideo').snapshotChanges();
    }
  }

  updateLikedVideoData(user, file) {
    const userRef = this.db.firestore.doc(`users/${user.uid}`).collection('likedvideo');
    return userRef.add(file);
  }

  deleteLikeVideoData(user, id) {
    const userRef = this.db.doc(`users/${user.uid}`).collection('likedvideo').doc(id);
    return userRef.delete();
  }
}
