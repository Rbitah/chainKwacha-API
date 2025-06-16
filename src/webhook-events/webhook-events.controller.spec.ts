import { Test, TestingModule } from '@nestjs/testing';
import { WebhookEventsController } from './webhook-events.controller';
import { WebhookEventsService } from './webhook-events.service';

describe('WebhookEventsController', () => {
  let controller: WebhookEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookEventsController],
      providers: [WebhookEventsService],
    }).compile();

    controller = module.get<WebhookEventsController>(WebhookEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
