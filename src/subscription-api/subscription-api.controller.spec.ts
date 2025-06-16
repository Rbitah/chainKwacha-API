import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionApiController } from './subscription-api.controller';
import { SubscriptionApiService } from './subscription-api.service';

describe('SubscriptionApiController', () => {
  let controller: SubscriptionApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionApiController],
      providers: [SubscriptionApiService],
    }).compile();

    controller = module.get<SubscriptionApiController>(SubscriptionApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
