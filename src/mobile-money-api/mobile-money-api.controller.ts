import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MobileMoneyApiService } from './mobile-money-api.service';
import { CreateMobileMoneyApiDto } from './dto/create-mobile-money-api.dto';
import { UpdateMobileMoneyApiDto } from './dto/update-mobile-money-api.dto';
import { AuthenticationGuard } from 'src/authentication/guards/authentication.guard';

@Controller('mobile-money-api')
export class MobileMoneyApiController {
  constructor(private readonly mobileMoneyApiService: MobileMoneyApiService) {}

  @UseGuards(AuthenticationGuard)
  @Post()
  create(@Body() createMobileMoneyApiDto: CreateMobileMoneyApiDto) {
    return this.mobileMoneyApiService.create(createMobileMoneyApiDto);
  }

  @Get()
  findAll() {
    return this.mobileMoneyApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobileMoneyApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMobileMoneyApiDto: UpdateMobileMoneyApiDto) {
    return this.mobileMoneyApiService.update(+id, updateMobileMoneyApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mobileMoneyApiService.remove(+id);
  }
}
