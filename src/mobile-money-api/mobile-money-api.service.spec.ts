import { Test, TestingModule } from '@nestjs/testing';
import { MobileMoneyApiService } from './mobile-money-api.service';

describe('MobileMoneyApiService', () => {
  let service: MobileMoneyApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MobileMoneyApiService],
    }).compile();

    service = module.get<MobileMoneyApiService>(MobileMoneyApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
