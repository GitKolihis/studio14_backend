/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { catchError, map, lastValueFrom } from 'rxjs';

@Injectable()
export class MovieapiService {
    constructor(private httpService: HttpService) { }

    private headersRequest = {
        // 'Content-Type': 'application/json',
        'X-RapidAPI-Host': `${process.env.X_RapidAPI_Host}`,
        'X-RapidAPI-Key': `${process.env.X_RapidAPI_Key}`,
        useQueryString: true
    }

    async getMoviesByTitle(title: string) {
        // const query = {
        //     q: title
        // }
        const url = `${process.env.X_URL}?q=` + title;
        console.log("URL for Movie Search:: ", url)
        const request = this.httpService
            .get(url, { headers: this.headersRequest })
            .pipe(
                map((res) => res.data)
            )
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API Not Available')
                })
            )

        const movies = await lastValueFrom(request)

        return {
            data: {
                result: movies.results
            }
        }
    }
}
