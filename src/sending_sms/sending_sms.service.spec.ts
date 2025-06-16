import { Test, TestingModule } from '@nestjs/testing';
import { SendingSmsService } from './sending_sms.service';

describe('SendingSmsService', () => {
  let service: SendingSmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendingSmsService],
    }).compile();

    service = module.get<SendingSmsService>(SendingSmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
