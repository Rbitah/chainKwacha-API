import { Module } from '@nestjs/common';
import { SubscriptionApiService } from './subscription-api.service';
import { SubscriptionApiController } from './subscription-api.controller';

@Module({
  controllers: [SubscriptionApiController],
  providers: [SubscriptionApiService],
})
export class SubscriptionApiModule {}
