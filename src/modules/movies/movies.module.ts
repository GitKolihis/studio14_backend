/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { moviesProviders} from './movies.providers'

@Module({
  providers: [MoviesService, ...moviesProviders],
  controllers: [MoviesController]
})
export class MoviesModule {}
