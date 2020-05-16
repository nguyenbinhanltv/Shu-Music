const functions = require('firebase-functions');

const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');

//Music controllers
const { getVietNamMusicAlbum, getVietNamMusic } = require('./controllers/music/nhacVietNam');
const { getUSUKMusicAlbum, getUSUKMusic } = require('./controllers/music/nhacUS-UK');
const { getTauKhuaMusicAlbum, getTauKhuaMusic } = require('./controllers/music/nhacHoa');
const { getKoreanMusicAlbum, getKoreanMusic } = require('./controllers/music/nhacHan');
const { getNhatBonMusicAlbum, getNhatBonMusic } = require('./controllers/music/nhacNhat');
const { getForeignMusicAlbum, getForeignMusic } = require('./controllers/music/nhacNuocKhac');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
const main = express();

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use('/api/v1', app);

const videoCollection = 'music';

module.exports.webApi = functions.https.onRequest(main);

//Middeware
app.get('/v-music', getVietNamMusic);
app.get('/v-music/:musicId', getVietNamMusicAlbum);

app.get('/us-music', getUSUKMusic);
app.get('/us-music/:musicId', getUSUKMusicAlbum);

app.get('/c-music', getTauKhuaMusic);
app.get('/c-music/:musicId', getTauKhuaMusicAlbum);

app.get('/k-music', getKoreanMusic);
app.get('/k-music/:musicId', getKoreanMusicAlbum);

app.get('/j-music', getNhatBonMusic);
app.get('/j-music/:musicId', getNhatBonMusicAlbum);

app.get('/f-music', getForeignMusic);
app.get('/f-music/:musicId', getForeignMusicAlbum);

app.get('/videos', );

app.get('/videos/:videoId', );

mudule.exports = { app };