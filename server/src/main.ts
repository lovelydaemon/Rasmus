import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.use(compression());

  console.log(`App started on http://${process.env.HOST}:${process.env.PORT}`);
  await app.listen(+process.env.PORT);
}
bootstrap();
