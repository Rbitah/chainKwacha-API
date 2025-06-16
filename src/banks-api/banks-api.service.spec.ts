import { Test, TestingModule } from '@nestjs/testing';
import { BanksApiService } from './banks-api.service';

describe('BanksApiService', () => {
  let service: BanksApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanksApiService],
    }).compile();

    service = module.get<BanksApiService>(BanksApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
