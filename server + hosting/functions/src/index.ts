import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as firebaseHelper from 'firebase-functions-helper';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
const main = express();

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use('/api/v1', app);

const musicCollection = 'music';
const videoCollection = 'music';

export const webApi = functions.https.onRequest(main);

app.get('/music', (req, res) => {
    firebaseHelper.firestore
    .backup(db, musicCollection)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get('/music/:musicId', (req, res) => {
    firebaseHelper.firestore
    .getDocument(db, musicCollection, req.params.musicId)
    .then(doc => res.status(200).send(doc))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get('/videos', (req, res) => {
    firebaseHelper.firestore
    .backup(db, videoCollection)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get('/videos/:videoId', (req, res) => {
    firebaseHelper.firestore
    .getDocument(db, videoCollection, req.params.videoId)
    .then(doc => res.status(200).send(doc))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

export { app };