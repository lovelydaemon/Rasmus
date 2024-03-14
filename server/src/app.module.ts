import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RssModule } from './rss/rss.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, RssModule, PostsModule],
})
export class AppModule {}
