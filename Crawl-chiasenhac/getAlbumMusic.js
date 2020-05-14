const puppeteer = require('puppeteer');

//Merge 2 mảng album và musicFiles
const mergeTwoArray = function (arr1, arr2) {
    for (let [index, item] of arr1.entries()) {
        arr1[index].musicFile = arr2[index].musicFile;
        arr1[index].lyric = arr2[index].lyric;
        arr1[index].imageFile = arr2[index].imageFile;
    }

    return arr1;
}

//Lấy 1 page nhạc
const getAlbumMusic = (async (pageNumber, path) => {

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
            const link = await `http://chiasenhac.vn${await item.querySelector('a').getAttribute('href')}`;

            links.push({
                title: title,
                singer: singer,
                link: link,
                imageFile: '',
                musicFile: '',
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

    //Lấy mảng file nhạc từ link trong album
    let musicFiles = [];
    for (let link of links) {
        await page.goto(link.link);
        let musicFile = await page.evaluate(() => {
            let musicFile = document.querySelector('.download_item');

            //Lấy lyric nhạc
            let lyricFile = document.getElementById('fulllyric');

            //Lấy hình ảnh
            let imageFile = document.getElementById('companion_cover');
            if(lyricFile) lyricFile = lyricFile.innerHTML.replace(/\<br\>/g, '');
            if(musicFile) musicFile = musicFile.getAttribute('href');
            if(imageFile) imageFile = imageFile.querySelector('img').getAttribute('src');

            return {
                imageFile: imageFile,
                musicFile: musicFile,
                lyric: lyricFile
            };
        });
        musicFiles.push(musicFile);
    }


    await browser.close();

    return {
        album: album,
        musicFiles: musicFiles
    }
});

module.exports = { getAlbumMusic, mergeTwoArray };