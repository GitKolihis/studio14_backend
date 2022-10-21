import { Test, TestingModule } from '@nestjs/testing';
import { MovieapiController } from './movieapi.controller';

describe('MovieapiController', () => {
  let controller: MovieapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieapiController],
    }).compile();

    controller = module.get<MovieapiController>(MovieapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
