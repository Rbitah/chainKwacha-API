import { Injectable } from '@nestjs/common';
import { CreateSubscriptionApiDto } from './dto/create-subscription-api.dto';
import { UpdateSubscriptionApiDto } from './dto/update-subscription-api.dto';

@Injectable()
export class SubscriptionApiService {
  create(createSubscriptionApiDto: CreateSubscriptionApiDto) {
    return 'This action adds a new subscriptionApi';
  }

  findAll() {
    return `This action returns all subscriptionApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriptionApi`;
  }

  update(id: number, updateSubscriptionApiDto: UpdateSubscriptionApiDto) {
    return `This action updates a #${id} subscriptionApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriptionApi`;
  }
}
