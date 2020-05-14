const getAlbumMusic = require('./getAlbumMusic');

//9 Page
const pageNumber = 1;
const pathNhacNhat = (page) => `https://chiasenhac.vn/mp3/japan.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Nhật';

const result = getAlbumMusic.getAlbumMusic(pageNumber, pathNhacNhat);

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