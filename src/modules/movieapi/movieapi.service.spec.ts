import { Test, TestingModule } from '@nestjs/testing';
import { MovieapiService } from './movieapi.service';

describe('MovieapiService', () => {
  let service: MovieapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieapiService],
    }).compile();

    service = module.get<MovieapiService>(MovieapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
