const puppeteer = require('puppeteer');

//Merge 2 mảng album và musicFiles
const mergeTwoArray = function (arr1, arr2) {
    for (let [index, item] of arr1.entries()) {
        arr1[index].musicFile = arr2[index];
    }

    return arr1;
}

//Get 1 page nhạc
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
                musicFile: ''
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
            if(musicFile) return musicFile.getAttribute('href');
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