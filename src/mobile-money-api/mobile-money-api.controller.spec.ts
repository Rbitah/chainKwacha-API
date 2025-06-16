import { Test, TestingModule } from '@nestjs/testing';
import { MobileMoneyApiController } from './mobile-money-api.controller';
import { MobileMoneyApiService } from './mobile-money-api.service';

describe('MobileMoneyApiController', () => {
  let controller: MobileMoneyApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobileMoneyApiController],
      providers: [MobileMoneyApiService],
    }).compile();

    controller = module.get<MobileMoneyApiController>(MobileMoneyApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
