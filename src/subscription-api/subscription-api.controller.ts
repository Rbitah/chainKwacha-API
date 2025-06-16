import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubscriptionApiService } from './subscription-api.service';
import { CreateSubscriptionApiDto } from './dto/create-subscription-api.dto';
import { UpdateSubscriptionApiDto } from './dto/update-subscription-api.dto';

@Controller('subscription-api')
export class SubscriptionApiController {
  constructor(private readonly subscriptionApiService: SubscriptionApiService) {}

  @Post()
  create(@Body() createSubscriptionApiDto: CreateSubscriptionApiDto) {
    return this.subscriptionApiService.create(createSubscriptionApiDto);
  }

  @Get()
  findAll() {
    return this.subscriptionApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionApiDto: UpdateSubscriptionApiDto) {
    return this.subscriptionApiService.update(+id, updateSubscriptionApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionApiService.remove(+id);
  }
}
