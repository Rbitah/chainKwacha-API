import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({imports:[UsersModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService,UsersService],
})
export class AuthenticationModule {}
