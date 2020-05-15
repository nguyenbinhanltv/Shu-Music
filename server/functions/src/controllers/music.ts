import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';

const db = admin.firestore();
const musicCollection = 'music';

export const getMusic: any = (req: any, res: any) => {
    firebaseHelper.firestore
    .backup(db, musicCollection)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
};

export const getAlbumMusic: any = (req: any, res: any) => {
    firebaseHelper.firestore
    .getDocument(db, musicCollection, req.params.musicId)
    .then(doc => res.status(200).send(doc))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
};