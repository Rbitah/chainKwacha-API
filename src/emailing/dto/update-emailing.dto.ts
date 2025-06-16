import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailingDto } from './create-emailing.dto';

export class UpdateEmailingDto extends PartialType(CreateEmailingDto) {}
