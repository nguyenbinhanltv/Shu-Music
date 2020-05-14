const getAlbumMusic = require('./getAlbumMusic');

//35 Page
const pageNumber = 1;
const pathNhacHan = (page) => `https://chiasenhac.vn/mp3/korea.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Hàn';

const result = getAlbumMusic.getAlbumMusic(pageNumber, pathNhacHan);

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