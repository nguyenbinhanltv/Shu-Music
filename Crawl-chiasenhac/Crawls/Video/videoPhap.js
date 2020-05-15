const getAlbumVideo = require('../getAlbumVideo');

//2273 Page

const pathVideoPhap = (page) => `https://chiasenhac.vn/hd/video/f-video.html?tab=video-2020&page=${page}`;
const typeVideo = 'Video Pháp';
const status = `200, Đưa tay đây nào........`;

const result = (pageNumber) => getAlbumVideo.getAlbumVideo(pageNumber, pathVideoPhap)
    .then(data => {

        const result = getAlbumVideo.mergeTwoArray(data.album, data.videoFiles);

        console.log(status);

        return ({
            type: typeVideo,
            page: pageNumber,
            album: result
        });
    })
    .catch(err => Promise.reject(err));

module.exports = {
    result
};