import { Module } from '@nestjs/common';
import { SendingSmsService } from './sending_sms.service';
import { SendingSmsController } from './sending_sms.controller';

@Module({
  controllers: [SendingSmsController],
  providers: [SendingSmsService],
})
export class SendingSmsModule {}
