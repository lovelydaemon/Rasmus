import { Body, Controller, Post } from '@nestjs/common';
import { RssService } from './rss.service';
import { Channel, Post as ChannelPost } from '@prisma/client';

@Controller()
export class RssController {
  constructor(private readonly rssService: RssService) {}

  @Post('/')
  getRss(
    @Body('url') url: string,
  ): Promise<{ channel: Channel; posts: ChannelPost[] }> {
    return this.rssService.parseRssUrl(url);
  }
}
