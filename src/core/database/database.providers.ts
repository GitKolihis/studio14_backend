/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/users/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
   provide: SEQUELIZE,
   useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
         case DEVELOPMENT:
            config = databaseConfig.development;
            break;
         case TEST:
            config = databaseConfig.test;
            break;
         case PRODUCTION:
            config = databaseConfig.production;
            break;
         default:
            config = databaseConfig.development;
      }
      const sequelize = new Sequelize({ ...config, autoLoadModels: true, synchronize: true });
      sequelize.addModels([User]);
      await sequelize.sync({ force: true });
      return sequelize;
   },
}];