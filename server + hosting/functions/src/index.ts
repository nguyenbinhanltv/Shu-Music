import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as firebaseHelper from "firebase-functions-helper/dist";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

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

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
const main = express();

main.use(cors());
app.use(cors())
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use("/api/v1", app);

export const webApi = functions.https.onRequest(main);

//Việt Nam
app.get("/v-music", (req, res) => {
  firebaseHelper.firestore
    .backup(db, VietNamMusicCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/v-music/:musicId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, VietNamMusicCollection, req.params.musicId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//US UK
app.get("/us-music", (req, res) => {
  firebaseHelper.firestore
    .backup(db, USUKMusicCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/us-music/:musicId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, USUKMusicCollection, req.params.musicId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Tàu Khựa
app.get("/c-music", (req, res) => {
  firebaseHelper.firestore
    .backup(db, TauKhuaMusicCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/c-music/:musicId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, TauKhuaMusicCollection, req.params.musicId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Nhạc Hàn
app.get("/k-music", (req, res) => {
  firebaseHelper.firestore
    .backup(db, KoreaMusicCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/k-music/:musicId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, KoreaMusicCollection, req.params.musicId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Nhạc Nhật Bổn
app.get("/j-music", (req, res) => {
  firebaseHelper.firestore
    .backup(db, JapanMusicCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});
app.get("/j-music/:musicId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, JapanMusicCollection, req.params.musicId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Nhạc nước khác
app.get("/f-music", (req, res) => {
  firebaseHelper.firestore
    .backup(db, ForeignMusicCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});
app.get("/f-music/:musicId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, ForeignMusicCollection, req.params.musicId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//----------------------------------------------------------------------------

//Video Việt Nam
app.get("/v-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, VietNamVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/v-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, VietNamVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//US UK
app.get("/us-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, USUKVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/us-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, USUKVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Tàu Khựa
app.get("/c-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, TauKhuaVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/c-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, TauKhuaVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Hàn
app.get("/k-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, KoreaVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/k-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, KoreaVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Nhật Bổn
app.get("/j-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, JapanVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/j-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, JapanVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Pháp
app.get("/fc-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, FranceVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/fc-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, FranceVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//live
app.get("/l-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, LiveVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/l-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, LiveVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

//Nước khác
app.get("/f-video", (req, res) => {
  firebaseHelper.firestore
    .backup(db, ForeignVideoCollection)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

app.get("/f-video/:videoId", (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, ForeignVideoCollection, req.params.videoId)
    .then((doc) => res.status(200).send(doc))
    .catch((err) => res.status(400).send(`Hổng được òi bạn gì ơi: ${err}`));
});

export { app };
