const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

const crawlData = require('./Crawls/index');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://shu-audio.firebaseio.com'
});

//CRUD firestore
const CRUDMusic = require('./CRUD-music');
const CRUDVideo = require('./CRUD-video');