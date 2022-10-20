/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_DEVELOPMENT_USERNAME,
        password: process.env.DB_DEVELOPMENT_PASSWORD,
        database: process.env.DB_DEVELOPMENT_DATABSE,
        host: process.env.DB_DEVELOPMENT_HOST,
        port: process.env.DB_DEVELOPMENT_PORT,
        dialect: process.env.DB_DEVELOPMENT_DIALECT,
    },
    test: {
        username: process.env.DB_TEST_USERNAME,
        password: process.env.DB_TEST_PASSWORD,
        database: process.env.DB_TEST_DATABASE,
        host: process.env.DB_TEST_HOST,
        port: process.env.DB_TEST_PORT,
        dialect: process.env.DB_TEST_DIALECT,
    },
    production: {
        username: process.env.DB_PRODUCTION_USERNAME,
        password: process.env.DB_PRODUCTION_PASSWORD,
        database: process.env.DB_PRODUCTION_DATABASE,
        host: process.env.DB_PRODUCTION_HOST,
        dialect: process.env.DB_PRODUCTION_DIALECT,
    },
};