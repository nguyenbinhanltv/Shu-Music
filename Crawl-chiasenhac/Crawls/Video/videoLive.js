const getAlbumVideo = require('../getAlbumVideo');

//2273 Page

const pathVideoLive = (page) => `https://chiasenhac.vn/hd/video/l-video.html?tab=video-2020&page=${page}`;
const typeVideo = 'Video Live';
const status = `200, Đưa tay đây nào........`;

const result = (pageNumber) => getAlbumVideo.getAlbumVideo(pageNumber, pathVideoLive)
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