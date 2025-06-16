import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperApiController } from './developer-api.controller';
import { DeveloperApiService } from './developer-api.service';

describe('DeveloperApiController', () => {
  let controller: DeveloperApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeveloperApiController],
      providers: [DeveloperApiService],
    }).compile();

    controller = module.get<DeveloperApiController>(DeveloperApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
