/* eslint-disable prettier/prettier */
import { Controller, Get, Param, NotFoundException, UseGuards, Post, Body, Request, Put, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { MovieDTO } from './dto/movie.dto'
import { Movie } from './movie.entity'
import { MoviesService } from './movies.service'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'

@ApiTags('Movies')
@ApiBearerAuth()
@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() movie: MovieDTO, @Request() req): Promise<Movie> {
        // save a new movie with respect to the user
        return await this.movieService.create(movie, req.user.id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Movie> {
        // find the post with this id
        const movie = await this.movieService.findOne(id)

        if (!movie) {
            throw new NotFoundException('This Movie does not exist')
        }

        return movie
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async udpate(@Param('id') id: number, @Body() movie: MovieDTO, @Request() req): Promise<Movie> {
        // get the number of rows affected and the updated post
        const { numberOfAffectedRows, updatedMovie } = await this.movieService.update(id, movie, req.user.id)

        // if the number of rows affected is zero, it means the post never existed
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This post does not exist')
        }

        // return movie
        return updatedMovie;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        // detele the post with this id
        const deleted = await this.movieService.delete(id, req.user.id)

        // if the number of rows affected is zero, it means the post never existed
        if (deleted === 0) {
            throw new NotFoundException('This movie does not exist')
        }

        // return success message
        return 'Movie deleted Successfully'
    }
}
