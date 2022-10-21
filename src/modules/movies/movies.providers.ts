/* eslint-disable prettier/prettier */
import { Movie } from './movie.entity';
import { MOVIE_REPOSITORY } from '../../core/constants'

export const moviesProviders = [{
    provide: MOVIE_REPOSITORY,
    useValue: Movie
}]