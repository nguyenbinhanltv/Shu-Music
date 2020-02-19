import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MusicData } from '../models/music-data.model';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor(
    private db: AngularFirestore
  ) { }

  getMusicData() {
    return this.db.collection('files').snapshotChanges();
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
