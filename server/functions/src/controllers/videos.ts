import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper';

const db = admin.firestore();
const videoCollection = 'music';

export const getVideos: any = (req: any, res: any) => {
    firebaseHelper.firestore
    .backup(db, videoCollection)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
};

export const getAlbumVideo: any = (req: any, res: any) => {
    firebaseHelper.firestore
    .getDocument(db, videoCollection, req.params.videoId)
    .then(doc => res.status(200).send(doc))
    .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
};