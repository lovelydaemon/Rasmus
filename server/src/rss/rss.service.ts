import { Injectable } from '@nestjs/common';
import * as Parser from 'rss-parser';
import * as sanitizeHtml from 'sanitize-html';
import { sanitizeHtmlConfig } from 'src/config/sanitize-html.config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RssService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly parser = new Parser();

  async parseRssUrl(url: string) {
    let parsed: Parser.Output<{ [key: string]: unknown }>;
    try {
      parsed = await this.parser.parseURL(url);
    } catch (err) {
      return null;
    }

    let shortLink = '';
    try {
      shortLink = new URL(parsed.link).hostname.replace('www.', '');
    } catch {
      shortLink = '';
    }

    const channel = await this.prisma.channel.upsert({
      where: {
        link: parsed.link,
      },
      update: {
        title: parsed.title,
        link: parsed.link,
        shortLink,
      },
      create: {
        link: parsed.link,
        title: parsed.title,
        shortLink,
      },
    });

    const posts = parsed.items.map((item) => {
      let description: string;

      try {
        description = sanitizeHtml(item.content, sanitizeHtmlConfig);
      } catch {
        description = '';
      }

      return {
        title: item.title,
        description,
        link: item.link,
        date: item.isoDate,
        channelId: channel.id,
      };
    });

    await this.prisma.post.createMany({
      data: posts,
      skipDuplicates: true,
    });

    return { channel };
  }
}
