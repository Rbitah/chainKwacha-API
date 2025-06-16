import { Injectable } from '@nestjs/common';
import { CreateEmailingDto } from './dto/create-emailing.dto';
import { UpdateEmailingDto } from './dto/update-emailing.dto';

@Injectable()
export class EmailingService {
  create(createEmailingDto: CreateEmailingDto) {
    return 'This action adds a new emailing';
  }

  findAll() {
    return `This action returns all emailing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emailing`;
  }

  update(id: number, updateEmailingDto: UpdateEmailingDto) {
    return `This action updates a #${id} emailing`;
  }

  remove(id: number) {
    return `This action removes a #${id} emailing`;
  }
}
