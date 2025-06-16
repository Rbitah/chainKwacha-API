import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SendingSmsService } from './sending_sms.service';
import { CreateSendingSmDto } from './dto/create-sending_sm.dto';
import { UpdateSendingSmDto } from './dto/update-sending_sm.dto';

@Controller('sending-sms')
export class SendingSmsController {
  constructor(private readonly sendingSmsService: SendingSmsService) {}

  @Post()
  create(@Body() createSendingSmDto: CreateSendingSmDto) {
    return this.sendingSmsService.create(createSendingSmDto);
  }

  @Get()
  findAll() {
    return this.sendingSmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sendingSmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSendingSmDto: UpdateSendingSmDto) {
    return this.sendingSmsService.update(+id, updateSendingSmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sendingSmsService.remove(+id);
  }
}
