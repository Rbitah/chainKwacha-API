import { Injectable } from '@nestjs/common';
import { CreateWebhookEventDto } from './dto/create-webhook-event.dto';
import { UpdateWebhookEventDto } from './dto/update-webhook-event.dto';

@Injectable()
export class WebhookEventsService {
  create(createWebhookEventDto: CreateWebhookEventDto) {
    return 'This action adds a new webhookEvent';
  }

  findAll() {
    return `This action returns all webhookEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webhookEvent`;
  }

  update(id: number, updateWebhookEventDto: UpdateWebhookEventDto) {
    return `This action updates a #${id} webhookEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} webhookEvent`;
  }
}
