/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Setting global prefix for the app
  app.setGlobalPrefix('api/v1');
  
  await app.listen(3000);
}
bootstrap();
