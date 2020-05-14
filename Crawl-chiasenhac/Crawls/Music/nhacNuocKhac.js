const getAlbumMusic = require('../getAlbumMusic');

//6 Page

const pathNhacNuocKhac = (page) => `https://chiasenhac.vn/mp3/other.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Nước Khác';

const result = (pageNumber) => getAlbumMusic.getAlbumMusic(pageNumber, pathNhacNuocKhac)
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

module.exports = {
    result
};