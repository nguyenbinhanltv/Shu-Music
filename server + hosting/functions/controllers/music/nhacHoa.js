import * as firebaseHelper from 'firebase-functions-helper';
import * as admin from 'firebase-admin';

const db = admin.firestore();

const musicCollection = 'c-music';

const getTauKhuaMusic = (req, res) => {
    firebaseHelper.firestore
        .backup(db, musicCollection)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
};

const getTauKhuaMusicAlbum = (req, res) => {
    firebaseHelper.firestore
        .getDocument(db, musicCollection, req.params.musicId)
        .then(doc => res.status(200).send(doc))
        .catch(err => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
};

export {
    getTauKhuaMusicAlbum,
    getTauKhuaMusic
};