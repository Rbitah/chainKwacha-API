import { Module } from '@nestjs/common';
import { MobileMoneyApiService } from './mobile-money-api.service';
import { MobileMoneyApiController } from './mobile-money-api.controller';

@Module({
  controllers: [MobileMoneyApiController],
  providers: [MobileMoneyApiService],
})
export class MobileMoneyApiModule {}
