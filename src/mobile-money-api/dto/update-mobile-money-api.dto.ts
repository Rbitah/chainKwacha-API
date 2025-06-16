import { PartialType } from '@nestjs/mapped-types';
import { CreateMobileMoneyApiDto } from './create-mobile-money-api.dto';

export class UpdateMobileMoneyApiDto extends PartialType(CreateMobileMoneyApiDto) {}
