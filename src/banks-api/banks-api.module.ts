import { Module } from '@nestjs/common';
import { BanksApiService } from './banks-api.service';
import { BanksApiController } from './banks-api.controller';

@Module({
  controllers: [BanksApiController],
  providers: [BanksApiService],
})
export class BanksApiModule {}
