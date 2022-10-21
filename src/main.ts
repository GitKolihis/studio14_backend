/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setting global prefix for the app
  // app.setGlobalPrefix('api/v1');

  // enable cors
  app.enableCors();

  // Endpont Validation
  app.useGlobalPipes(new ValidateInputPipe());

  // Setting up Swagger Documentation
  const config = new DocumentBuilder()
  .setTitle('Studio14 Career Test')
  .setDescription('RestFul API for Movie App')
  .setVersion('1.0')
  .addTag('Endpoints')
  .addBearerAuth()
  .build()

  
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api/v1', app, document)


  await app.listen(3000);
}
bootstrap();
