import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailingService } from './emailing.service';
import { CreateEmailingDto } from './dto/create-emailing.dto';
import { UpdateEmailingDto } from './dto/update-emailing.dto';

@Controller('emailing')
export class EmailingController {
  constructor(private readonly emailingService: EmailingService) {}

  // @Post()
  // create(@Body() createEmailingDto: CreateEmailingDto) {
  //   return this.emailingService.create(createEmailingDto);
  // }

  // @Get()
  // findAll() {
  //   return this.emailingService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.emailingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmailingDto: UpdateEmailingDto) {
  //   return this.emailingService.update(+id, updateEmailingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.emailingService.remove(+id);
  // }
}
