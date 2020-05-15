const getAlbumMusic = require('../getAlbumMusic');

//35 Page

const pathNhacHan = (page) => `https://chiasenhac.vn/mp3/korea.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Hàn';
const status = `200, Đưa tay đây nào........`;

const result = (pageNumber) => getAlbumMusic.getAlbumMusic(pageNumber, pathNhacHan)
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