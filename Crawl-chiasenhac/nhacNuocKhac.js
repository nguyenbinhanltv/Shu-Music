const getAlbumMusic = require('./getAlbumMusic');

//6 Page
const pageNumber = 1;
const pathNhacNuocKhac = (page) => `https://chiasenhac.vn/mp3/other.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Nước Khác';

const result = getAlbumMusic.getAlbumMusic(pageNumber, pathNhacNuocKhac);

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