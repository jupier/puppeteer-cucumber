const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example1111.com');
    await page.screenshot({path: 'example.png'});

    browser.close();
})();