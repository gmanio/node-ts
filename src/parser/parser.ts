import * as puppeteer from 'puppeteer';
import * as process from 'process';
import * as path from 'path';


export class Parser {
  private BASE_DIR = process.cwd();

  public excute() {
    (async () => {
      let browser = await puppeteer.launch();
      let page = await browser.newPage();
      await page.goto('http://m.ruliweb.com', { waitUntil: 'networkidle2' });

      const links = await page.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('#m_hit_article_2 .widget_bottom .subject.deco'));
        return anchors.map(anchor => {
          return {
            link: anchor.href,
            text: anchor.innerText
          }
        });
      });

      // await page.screenshot({ path: path.join(process.cwd(), 'generated', 'test.png') });
      await browser.close();
    })();
  }
}


