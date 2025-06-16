import { Injectable } from '@nestjs/common';
import { CreateMobileMoneyApiDto } from './dto/create-mobile-money-api.dto';
import { UpdateMobileMoneyApiDto } from './dto/update-mobile-money-api.dto';

@Injectable()
export class MobileMoneyApiService {
  create(createMobileMoneyApiDto: CreateMobileMoneyApiDto) {
    return 'This action adds a new mobileMoneyApi';
  }

  findAll() {
    return `This action returns all mobileMoneyApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mobileMoneyApi`;
  }

  update(id: number, updateMobileMoneyApiDto: UpdateMobileMoneyApiDto) {
    return `This action updates a #${id} mobileMoneyApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} mobileMoneyApi`;
  }
}
