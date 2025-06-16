import { Injectable } from '@nestjs/common';
import { CreateSendingSmDto } from './dto/create-sending_sm.dto';
import { UpdateSendingSmDto } from './dto/update-sending_sm.dto';

@Injectable()
export class SendingSmsService {
  create(createSendingSmDto: CreateSendingSmDto) {
    return 'This action adds a new sendingSm';
  }

  findAll() {
    return `This action returns all sendingSms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sendingSm`;
  }

  update(id: number, updateSendingSmDto: UpdateSendingSmDto) {
    return `This action updates a #${id} sendingSm`;
  }

  remove(id: number) {
    return `This action removes a #${id} sendingSm`;
  }
}
