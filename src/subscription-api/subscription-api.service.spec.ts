import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionApiService } from './subscription-api.service';

describe('SubscriptionApiService', () => {
  let service: SubscriptionApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptionApiService],
    }).compile();

    service = module.get<SubscriptionApiService>(SubscriptionApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
