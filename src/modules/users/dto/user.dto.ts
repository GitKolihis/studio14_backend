/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export class UserDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly firstname: string;

    @IsNotEmpty()
    @ApiProperty()
    readonly lastname: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(Gender, {
        message: "Gender must either be male or female",
    })
    @ApiProperty()
    readonly gender: Gender;
}