import * as puppeteer from 'puppeteer';
import * as path from 'path';


export class Parser {
  public excute() {
    (async () => {
      let browser = await puppeteer.launch();
      let page = await browser.newPage();
      await page.goto('http://m.ruliweb.com');

      await page.screenshot({ path: 'generated/test.png' });

      await browser.close();
    })();
  }
}


