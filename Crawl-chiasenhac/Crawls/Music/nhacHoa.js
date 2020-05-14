const getAlbumMusic = require('../getAlbumMusic');

//26 Page

const pathNhacHoa = (page) => `https://chiasenhac.vn/mp3/chinese.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc Hoa';

const result = (pageNumber) => getAlbumMusic.getAlbumMusic(pageNumber, pathNhacHoa)
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