const getAlbumMusic = require('./getAlbumMusic');

//61 Page
const pageNumber = 1;
const pathNhacVietNam = (page) => `https://chiasenhac.vn/mp3/vietnam.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Việt Nam';

const result = getAlbumMusic.getAlbumMusic(pageNumber, pathNhacVietNam);

result
.then(data => {
    const result = getAlbumMusic.mergeTwoArray(data.album, data.musicFiles);

    console.log(result);

    Promise.resolve({
        type: typeMusic,
        page: pageNumber,
        album: result
    });
})
.catch(err => Promise.reject(err));