import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeveloperApiService } from './developer-api.service';
import { CreateDeveloperApiDto } from './dto/create-developer-api.dto';
import { UpdateDeveloperApiDto } from './dto/update-developer-api.dto';

@Controller('developer-api')
export class DeveloperApiController {
  constructor(private readonly developerApiService: DeveloperApiService) {}

  @Post()
  create(@Body() createDeveloperApiDto: CreateDeveloperApiDto) {
    return this.developerApiService.create(createDeveloperApiDto);
  }

  @Get()
  findAll() {
    return this.developerApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developerApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeveloperApiDto: UpdateDeveloperApiDto) {
    return this.developerApiService.update(+id, updateDeveloperApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.developerApiService.remove(+id);
  }
}
