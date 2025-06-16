import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebhookEventsService } from './webhook-events.service';
import { CreateWebhookEventDto } from './dto/create-webhook-event.dto';
import { UpdateWebhookEventDto } from './dto/update-webhook-event.dto';

@Controller('webhook-events')
export class WebhookEventsController {
  constructor(private readonly webhookEventsService: WebhookEventsService) {}

  @Post()
  create(@Body() createWebhookEventDto: CreateWebhookEventDto) {
    return this.webhookEventsService.create(createWebhookEventDto);
  }

  @Get()
  findAll() {
    return this.webhookEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webhookEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebhookEventDto: UpdateWebhookEventDto) {
    return this.webhookEventsService.update(+id, updateWebhookEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webhookEventsService.remove(+id);
  }
}
