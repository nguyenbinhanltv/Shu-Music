const getAlbumMusic = require('../getAlbumMusic');

//61 Page

const pathNhacVietNam = (page) => `https://chiasenhac.vn/mp3/vietnam.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Việt Nam';
const status = `200, Đưa tay đây nào........`;

const result = (pageNumber) => getAlbumMusic.getAlbumMusic(pageNumber, pathNhacVietNam)
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