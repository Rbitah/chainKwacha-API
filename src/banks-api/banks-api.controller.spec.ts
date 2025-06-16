import { Test, TestingModule } from '@nestjs/testing';
import { BanksApiController } from './banks-api.controller';
import { BanksApiService } from './banks-api.service';

describe('BanksApiController', () => {
  let controller: BanksApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanksApiController],
      providers: [BanksApiService],
    }).compile();

    controller = module.get<BanksApiController>(BanksApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
