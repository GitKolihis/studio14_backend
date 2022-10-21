import { Module } from '@nestjs/common';
import { MovieapiController } from './movieapi.controller';
import { MovieapiService } from './movieapi.service';

@Module({
  controllers: [MovieapiController],
  providers: [MovieapiService]
})
export class MovieapiModule {}
