const getAlbumMusic = require('./getAlbumMusic');

//86 Page
const pageNumber = 1;
const pathNhacUSUK = (page) => `https://chiasenhac.vn/mp3/us-uk.html?tab=album-2020&page=${page}`;
const typeMusic = 'Nhạc US-UK';

const result = getAlbumMusic.getAlbumMusic(pageNumber, pathNhacUSUK);

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