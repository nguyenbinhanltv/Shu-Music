import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MusicData } from '../models/music-data.model';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  index = -1;
  currentFile: any = {};
  files: Array<any> = [];

  name = new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]);
  singer = new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]);
  artist = new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2)]);

  constructor(
    private db: AngularFirestore,
    private http: HttpClient
  ) { }

  getMusicData() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.http.get('https://shu-music-api.firebaseapp.com/api/v1/v-music').toPromise();
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

  updateMusicData({name, artist, singer, musicURL, musicPath, imgURL, imgPath}: MusicData) {
    const dataRef = this.db.collection('files');
    const data = {
      name,
      singer,
      artist,
      musicURL,
      musicPath,
      imgURL,
      imgPath
    };
    return dataRef.add(data);
  }

  deleteLikeSongData(user, id) {
    const userRef = this.db.doc(`users/${user.uid}`).collection('likedsong').doc(id);
    return userRef.delete();
  }
}
