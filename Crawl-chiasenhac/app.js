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
// CRUDMusic.addMusicAlbum(USUKMusicCollection, crawlData.musicAlbum.nhacUSUK, 1);
// CRUDMusic.addMusicAlbum(TauKhuaMusicCollection, crawlData.musicAlbum.nhacHoa, 1);
// CRUDMusic.addMusicAlbum(KoreaMusicCollection, crawlData.musicAlbum.nhacHan, 1);
// CRUDMusic.addMusicAlbum(JapanMusicCollection, crawlData.musicAlbum.nhacNhat, 1);
// CRUDMusic.addMusicAlbum(ForeignMusicCollection, crawlData.musicAlbum.nhacNuocKhac, 1);

CRUDVideo.addVideoAlbum(VietNamVideoCollection, crawlData.videoAlbum.videoVietNam, 1);
CRUDVideo.addVideoAlbum(USUKVideoCollection, crawlData.videoAlbum.videoUSUK, 1);
CRUDVideo.addVideoAlbum(TauKhuaVideoCollection, crawlData.videoAlbum.videoHoa, 1);
CRUDVideo.addVideoAlbum(KoreaVideoCollection, crawlData.videoAlbum.videoHan, 1);
CRUDVideo.addVideoAlbum(JapanVideoCollection, crawlData.videoAlbum.videoNhat, 1);
CRUDVideo.addVideoAlbum(FranceVideoCollection, crawlData.videoAlbum.videoPhap, 1);
CRUDVideo.addVideoAlbum(ForeignVideoCollection, crawlData.videoAlbum.videoNuocKhac, 1);
CRUDVideo.addVideoAlbum(LiveVideoCollection, crawlData.videoAlbum.videoLive, 1);