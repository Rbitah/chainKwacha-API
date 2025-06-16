import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionApiDto } from './create-subscription-api.dto';

export class UpdateSubscriptionApiDto extends PartialType(CreateSubscriptionApiDto) {}
