const getAlbumVideo = require('../getAlbumVideo');

//2273 Page

const pathVideoNhat = (page) => `https://chiasenhac.vn/hd/video/l-video.html?tab=video-2020&page=${page}`;
const typeVideo = 'Video Nhật Bản';

const result = (pageNumber) => getAlbumVideo.getAlbumVideo(pageNumber, pathVideoNhat)
    .then(data => {

        const result = getAlbumVideo.mergeTwoArray(data.album, data.videoFiles);

        console.log(result);

        Promise.resolve({
            type: typeVideo,
            page: pageNumber,
            album: result
        });
    })
    .catch(err => Promise.reject(err));

module.exports = {
    result
};