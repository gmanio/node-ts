import * as puppeteer from 'puppeteer';

export class Parser {
  public async excute() {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto('http://m.ruliweb.com');

    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('#m_hit_article_2 .widget_bottom .subject.deco'));
      return anchors.map((anchor: HTMLAnchorElement) => {
        return {
          link: anchor.href,
          text: anchor.innerText
        }
      });
    });

    await browser.close();
    return links;
  }
}


