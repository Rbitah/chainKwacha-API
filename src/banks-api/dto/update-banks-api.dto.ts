import { PartialType } from '@nestjs/mapped-types';
import { CreateBanksApiDto } from './create-banks-api.dto';

export class UpdateBanksApiDto extends PartialType(CreateBanksApiDto) {}
