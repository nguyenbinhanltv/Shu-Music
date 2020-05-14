const getAlbumMusic = require('../getAlbumMusic');

//61 Page

const pathNhacVietNam = (page) => `https://chiasenhac.vn/mp3/vietnam.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Việt Nam';

const result = (pageNumber) => getAlbumMusic.getAlbumMusic(pageNumber, pathNhacVietNam)
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