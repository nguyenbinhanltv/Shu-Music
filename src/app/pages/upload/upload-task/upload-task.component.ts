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

  @Input() file: File;
  @Input() name: string;
  @Input() singer: string;
  @Input() artist: string;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  songURL: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private cloudService: CloudService
  ) { }

  ngOnInit() {
    this.startUpload();
  }

  log() {
    console.log(`${this.name}, ${this.singer}, ${this.artist}`);
  }

  startUpload() {

    // The storage path
    const path = `music/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async () =>  {
        this.songURL = await ref.getDownloadURL().toPromise();
        this.cloudService.updateMusicData({
          name: this.name,
          singer: this.singer,
          artist: this.artist,
          url: this.songURL,
          // tslint:disable-next-line: object-literal-shorthand
          path: path
        } as MusicData);
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
