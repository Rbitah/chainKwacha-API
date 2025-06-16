import { Injectable } from '@nestjs/common';
import { CreateDeveloperApiDto } from './dto/create-developer-api.dto';
import { UpdateDeveloperApiDto } from './dto/update-developer-api.dto';

@Injectable()
export class DeveloperApiService {
  create(createDeveloperApiDto: CreateDeveloperApiDto) {
    return 'This action adds a new developerApi';
  }

  findAll() {
    return `This action returns all developerApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} developerApi`;
  }

  update(id: number, updateDeveloperApiDto: UpdateDeveloperApiDto) {
    return `This action updates a #${id} developerApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} developerApi`;
  }
}
