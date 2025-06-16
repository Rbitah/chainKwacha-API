import { Module } from '@nestjs/common';
import { WebhookEventsService } from './webhook-events.service';
import { WebhookEventsController } from './webhook-events.controller';

@Module({
  controllers: [WebhookEventsController],
  providers: [WebhookEventsService],
})
export class WebhookEventsModule {}
