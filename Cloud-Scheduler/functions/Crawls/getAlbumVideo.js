/* eslint-disable no-useless-escape */
/* eslint-disable no-await-in-loop */
const puppeteer = require('puppeteer');

//Merge 2 mảng album và videoFiles
const mergeTwoArray = function (arr1, arr2) {
    for (let [index, item] of arr1.entries()) {
        arr1[index].videoFile = arr2[index].videoFile;
        arr1[index].lyric = arr2[index].lyric;
        arr1[index].imageFile = arr2[index].imageFile;
    }

    return arr1;
}

//Lấy 1 page video
const getAlbumVideo = (async (pageNumber, path) => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(path(pageNumber));

    const album = await page.evaluate(() => {
        let items = document.querySelectorAll('.card-body');
        let links = [];

        items.forEach(async item => {

            const title = await item.querySelector('.card-title').querySelector('a').getAttribute('title');
            const singer = await item.querySelector('.card-text').querySelector('a').innerHTML;
            const link = await item.querySelector('a').getAttribute('href');

            links.push({
                title: title,
                singer: singer,
                link: link,
                imageFile: '',
                videoFile: '',
                lyric: ''
            });
        });
        return links;
    });

    //Lấy mảng link trong album
    const links = [];
    album.forEach(song => {
        links.push({
            link: song.link
        });
    });

    //Lấy mảng file video từ link trong album
    let videoFiles = [];
    for (let link of links) {
        await page.goto(link.link);
        let videoFile = await page.evaluate(() => {
            let videoFile = document.querySelector('.download_item');

            //Lấy lyric nhạc
            let lyricFile = document.getElementById('fulllyric');

            //Lấy hình ảnh
            let imageFile = document.getElementById('companion_cover');

            if (lyricFile) lyricFile = lyricFile.innerHTML.replace(/\<br\>/g, '');
            if (videoFile) videoFile = videoFile.getAttribute('href');
            if (imageFile) imageFile = imageFile.querySelector('img').getAttribute('src');

            return {
                imageFile: imageFile,
                videoFile: videoFile,
                lyric: lyricFile
            };
        });
        videoFiles.push(videoFile);
    }


    await browser.close();

    return {
        album: album,
        videoFiles: videoFiles
    }
});

module.exports = { getAlbumVideo, mergeTwoArray };