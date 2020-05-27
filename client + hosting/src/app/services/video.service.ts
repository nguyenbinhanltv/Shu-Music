import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { StreamState } from '../models/stream-state.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videoObj = new VideoTrack();

  constructor() {
  }
}
