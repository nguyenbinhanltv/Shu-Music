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

//Music collections
const VietNamMusicCollection = "v-music";
const USUKMusicCollection = "us-music";
const TauKhuaMusicCollection = "c-music";
const KoreaMusicCollection = "k-music";
const JapanMusicCollection = "j-music";
const ForeignMusicCollection = "f-music";

//Video collections
const VietNamVideoCollection = "v-video";
const USUKVideoCollection = "us-video";
const TauKhuaVideoCollection = "c-video";
const KoreaVideoCollection = "k-video";
const JapanVideoCollection = "j-video";
const FranceVideoCollection = "fc-video";
const ForeignVideoCollection = "f-video";
const LiveVideoCollection = "l-video";


// CRUDMusic.addMusicAlbum(VietNamMusicCollection, crawlData.musicAlbum.nhacVietNam, 1);
// CRUDMusic.addMusicAlbum(VietNamMusicCollection, crawlData.musicAlbum.nhacVietNam, 2);
// CRUDMusic.addMusicAlbum(VietNamMusicCollection, crawlData.musicAlbum.nhacVietNam, 3);
// CRUDMusic.addMusicAlbum(VietNamMusicCollection, crawlData.musicAlbum.nhacVietNam, 4);
// CRUDMusic.addMusicAlbum(VietNamMusicCollection, crawlData.musicAlbum.nhacVietNam, 5);

// CRUDVideo.addVideoAlbum(VietNamVideoCollection, crawlData.videoAlbum.videoVietNam, 1);
// CRUDVideo.addVideoAlbum(VietNamVideoCollection, crawlData.videoAlbum.videoVietNam, 2);
// CRUDVideo.addVideoAlbum(VietNamVideoCollection, crawlData.videoAlbum.videoVietNam, 3);
// CRUDVideo.addVideoAlbum(VietNamVideoCollection, crawlData.videoAlbum.videoVietNam, 4);
// CRUDVideo.addVideoAlbum(VietNamVideoCollection, crawlData.videoAlbum.videoVietNam, 5);