import { PartialType } from '@nestjs/mapped-types';
import { CreateSendingSmDto } from './create-sending_sm.dto';

export class UpdateSendingSmDto extends PartialType(CreateSendingSmDto) {}
