import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperApiService } from './developer-api.service';

describe('DeveloperApiService', () => {
  let service: DeveloperApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeveloperApiService],
    }).compile();

    service = module.get<DeveloperApiService>(DeveloperApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
