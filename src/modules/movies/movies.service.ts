/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { MOVIE_REPOSITORY } from '../../core/constants';
import { User } from '../users/user.entity'
import { Movie } from './movie.entity'
import { MovieDTO } from './dto/movie.dto'

@Injectable()
export class MoviesService {
    constructor(@Inject(MOVIE_REPOSITORY) private readonly movieRepository: typeof Movie) { }

    // Create user's saved movie
    async create(movie: MovieDTO, userId): Promise<Movie> {
        return await this.movieRepository.create<Movie>({ ...movie, userId })
    }

    // Get user's saved movie by id
    async findOne(id): Promise<Movie> {
        return await this.movieRepository.findOne({
            where: { id },
            include: [{ model: User, attributes: { exclude: ['password'] } }]
        })
    }

    // update user's saved movie
    async update(id, data, userId) {
        const [numberOfAffectedRows, [updatedMovie]] = await this.movieRepository.update({ ...data }, { where: { id, userId }, returning: true });
        return {
            numberOfAffectedRows, updatedMovie
        }
    }

    async delete(id, userId) {
        return await this.movieRepository.destroy({ where: { id, userId } })
    }
}
