import { Test, TestingModule } from '@nestjs/testing';
import { SendingSmsController } from './sending_sms.controller';
import { SendingSmsService } from './sending_sms.service';

describe('SendingSmsController', () => {
  let controller: SendingSmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendingSmsController],
      providers: [SendingSmsService],
    }).compile();

    controller = module.get<SendingSmsController>(SendingSmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
