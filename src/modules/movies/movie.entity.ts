/* eslint-disable prettier/prettier */
import { DataTypes } from 'sequelize';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity'

@Table
export class Movie extends Model<Movie> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    image: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    duration: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    episodes: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    seriesStart: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    seriesEnd: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    titleType: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    year: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId: number;

    @BelongsTo(() => User)
    user: User;

}