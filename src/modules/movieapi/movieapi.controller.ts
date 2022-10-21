/* eslint-disable prettier/prettier */
import { Controller, Get, Query, } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MovieapiService } from './movieapi.service';

@ApiTags('MovieApi')
@Controller('movieapi')
export class MovieapiController {
    constructor(private movieService: MovieapiService) { }

    @Get('/title')
    getMoviesByTitle(@Query('title') title: string) {
        return this.movieService.getMoviesByTitle(title);
    }
}
