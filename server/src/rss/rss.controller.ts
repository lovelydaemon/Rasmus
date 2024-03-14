import { Body, Controller, Post } from '@nestjs/common';
import { RssService } from './rss.service';

@Controller()
export class RssController {
  constructor(private readonly rssService: RssService) {}

  @Post('/')
  getRss(@Body('url') url: string) {
    return this.rssService.parseRssUrl(url);
  }
}
