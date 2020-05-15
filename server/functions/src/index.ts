import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

admin.initializeApp(functions.config().firebase);

//Controller
import { getMusic, getAlbumMusic } from './controllers/music';
import { getVideos, getAlbumVideo } from './controllers/videos';

const app = express();
const main = express();

app.get('/music', getMusic);
app.get('/music/:musicId', getAlbumMusic);

app.get('/videos', getVideos);
app.get('/videos/:videoId', getAlbumVideo);

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

export const webApi = functions.https.onRequest(main);