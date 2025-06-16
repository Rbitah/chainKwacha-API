import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BanksApiService } from './banks-api.service';
import { CreateBanksApiDto } from './dto/create-banks-api.dto';
import { UpdateBanksApiDto } from './dto/update-banks-api.dto';

@Controller('banks-api')
export class BanksApiController {
  constructor(private readonly banksApiService: BanksApiService) {}

  @Post()
  create(@Body() createBanksApiDto: CreateBanksApiDto) {
    return this.banksApiService.create(createBanksApiDto);
  }

  @Get()
  findAll() {
    return this.banksApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.banksApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanksApiDto: UpdateBanksApiDto) {
    return this.banksApiService.update(+id, updateBanksApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.banksApiService.remove(+id);
  }
}
