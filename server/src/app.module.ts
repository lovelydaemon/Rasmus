import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RssModule } from './rss/rss.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    RssModule,
    PostsModule,
    ChannelsModule,
  ],
})
export class AppModule {}
