import { PartialType } from '@nestjs/mapped-types';
import { CreateDeveloperApiDto } from './create-developer-api.dto';

export class UpdateDeveloperApiDto extends PartialType(CreateDeveloperApiDto) {}
