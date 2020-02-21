import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { MusicData } from 'src/app/models/music-data.model';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() musicFile: File;
  @Input() imgFile: File;
  @Input() name: string;
  @Input() singer: string;
  @Input() artist: string;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;

  songURL: string;
  imgURL: string;

  constructor(
    private storage: AngularFireStorage,
    private cloudService: CloudService
  ) { }

  ngOnInit() {
    this.startUpload();
  }

  log() {
    console.log(this.musicFile);
  }

  log1() {
    console.log(this.imgFile);
  }

  startUpload() {

    if (this.musicFile !== null && this.imgFile !== null) {
      // The storage path
      const musicPath = `music/${Date.now()}_${this.musicFile.name}`;
      const imgPath = `images/${Date.now()}_${this.imgFile.name}`;

      // Reference to storage bucket
      const musicRef = this.storage.ref(musicPath);
      const imgRef = this.storage.ref(imgPath);

      // The main task
      this.storage.upload(imgPath, this.imgFile);
      this.task = this.storage.upload(musicPath, this.musicFile);

      // Progress monitoring
      this.percentage = this.task.percentageChanges();

      this.snapshot = this.task.snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize( async () =>  {
          this.songURL = await musicRef.getDownloadURL().toPromise();
          this.imgURL = await imgRef.getDownloadURL().toPromise();
          console.log(this.songURL);
          console.log(this.imgURL);
          this.cloudService.updateMusicData({
            name: this.name,
            singer: this.singer,
            artist: this.artist,
            musicURL: this.songURL,
            imgURL: this.imgURL,
            musicPath: `${musicPath}`,
            imgPath: `${imgPath}`
          } as MusicData);
        }),
      );
    }
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
