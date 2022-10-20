/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MovieDTO {
    @IsNotEmpty()
    @ApiProperty()
    readonly image: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly duration: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly episodes: number;

    @IsNotEmpty()
    @ApiProperty()
    readonly seriesStart: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly seriesEnd: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly title: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly titleType: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly year: string;

    @IsNotEmpty()
    @ApiProperty({ type: [Object]})
    readonly principal: object[];
}