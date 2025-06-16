import { Module } from '@nestjs/common';
import { DeveloperApiService } from './developer-api.service';
import { DeveloperApiController } from './developer-api.controller';

@Module({
  controllers: [DeveloperApiController],
  providers: [DeveloperApiService],
})
export class DeveloperApiModule {}
