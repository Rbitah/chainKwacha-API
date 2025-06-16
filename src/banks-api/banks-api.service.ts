import { Injectable } from '@nestjs/common';
import { CreateBanksApiDto } from './dto/create-banks-api.dto';
import { UpdateBanksApiDto } from './dto/update-banks-api.dto';

@Injectable()
export class BanksApiService {
  create(createBanksApiDto: CreateBanksApiDto) {
    return 'This action adds a new banksApi';
  }

  findAll() {
    return `This action returns all banksApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} banksApi`;
  }

  update(id: number, updateBanksApiDto: UpdateBanksApiDto) {
    return `This action updates a #${id} banksApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} banksApi`;
  }
}
