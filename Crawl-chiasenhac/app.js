const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

const crawlData = require('./Crawls/index');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://shu-music-api.firebaseio.com'
});

//CRUD firestore
const CRUDMusic = require('./CRUD-music');
const CRUDVideo = require('./CRUD-video');

CRUDMusic.addMusicAlbum('music', crawlData.musicAlbum.nhacVietNam, 4);
CRUDVideo.addVideoAlbum('videos', crawlData.videoAlbum.videoVietNam, 4);