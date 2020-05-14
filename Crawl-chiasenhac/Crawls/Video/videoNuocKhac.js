const getAlbumVideo = require('../getAlbumVideo');

//2273 Page

const pathVideoNuocKhac = (page) => `https://chiasenhac.vn/hd/video/o-video.html?tab=video-2020&page=${page}`;
const typeVideo = 'Video Nước Khác';

const result = (pageNumber) => getAlbumVideo.getAlbumVideo(pageNumber, pathVideoNuocKhac)
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