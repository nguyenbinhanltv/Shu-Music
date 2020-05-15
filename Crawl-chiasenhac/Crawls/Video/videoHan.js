const getAlbumVideo = require('../getAlbumVideo');

//2273 Page

const pathVideoHan = (page) => `https://chiasenhac.vn/hd/video/k-video.html?tab=video-2020&page=${page}`;
const typeVideo = 'Video Hàn Quốc';
const status = `200, Đưa tay đây nào........`;

const result = (pageNumber) => getAlbumVideo.getAlbumVideo(pageNumber, pathVideoHan)
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