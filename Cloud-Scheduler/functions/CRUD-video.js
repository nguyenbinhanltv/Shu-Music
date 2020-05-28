const admin = require('firebase-admin');
let db = admin.firestore();

//CRUD music album
const addVideoAlbum = async (collection, typeVideo, pageNumber) => {
    const crawlVideoAlbum = await typeVideo.result(pageNumber);
    return db.collection(collection)
        .add(crawlVideoAlbum)
        .then(refDoc => {
            return console.log(`Mãi bên nhau bạn nhớ !!!${refDoc.id}`);
        })
        .catch(() => console.log('Không được rùi bạn uiiii :(('));
};

const fetchVideoAlbum = (collection) => {
    return db.collection(collection)
        .get()
        .then(querySnapshot => {
            return querySnapshot.docs.map(doc => {
                let data = doc.data();
                console.log(`Thấy mấy bạn rùi à nha :3 ->>>>>>>>> ${doc.id}`);
                return data;
            });
        }).catch(() => console.log('Không được rùi bạn uiiii :(('));
};

module.exports = {
    addVideoAlbum,
    fetchVideoAlbum
};