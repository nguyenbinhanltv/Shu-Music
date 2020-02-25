import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MusicData } from '../models/music-data.model';
import { FormControl, Validators } from '@angular/forms';
import { Playlist } from '../models/playlist.model';

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
    private db: AngularFirestore
  ) { }

  getMusicData() {
    return this.db.collection('files').snapshotChanges();
  }

  getUserData() {
    return this.db.collection('users').snapshotChanges();
  }

  updateUserData(user, song) {
    const userRef = this.db.collection(`playlist`);
    return userRef.add(song);
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
}
