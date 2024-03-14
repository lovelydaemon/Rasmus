import { Injectable } from '@nestjs/common';
import * as Parser from 'rss-parser';
import * as sanitizeHtml from 'sanitize-html';
import { sanitizeHtmlConfig } from 'src/config/sanitize-html.config';

@Injectable()
export class RssService {
  private readonly parser = new Parser();

  async parseRssUrl(url: string) {
    let parsed: Parser.Output<{ [key: string]: unknown }>;
    try {
      parsed = await this.parser.parseURL(url);
    } catch (err) {
      return null;
    }

    parsed.items = parsed.items.map((item) => {
      try {
        const content = sanitizeHtml(item.content, sanitizeHtmlConfig);
        return { ...item, content };
      } catch {
        return { ...item, content: '' };
      }
    });
    return parsed;
  }
}
