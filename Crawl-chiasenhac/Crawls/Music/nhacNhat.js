const getAlbumMusic = require('../getAlbumMusic');

//9 Page

const pathNhacNhat = (page) => `https://chiasenhac.vn/mp3/japan.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Nhật';
const status = `200, Đưa tay đây nào........`;

const result = (pageNumber) => getAlbumMusic.getAlbumMusic(pageNumber, pathNhacNhat)
    .then(data => {
        const result = getAlbumMusic.mergeTwoArray(data.album, data.musicFiles);

        console.log(status);

        return ({
            type: typeMusic,
            page: pageNumber,
            album: result
        });
    })
    .catch(err => Promise.reject(err));

module.exports = {
    result
};