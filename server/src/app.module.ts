import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RssModule } from './rss/rss.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, RssModule],
})
export class AppModule {}
