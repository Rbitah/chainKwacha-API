import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/create-authentication.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticationService {

  constructor(private readonly usersService: UsersService) { }

  async register(dto: RegisterDto) {
    const user = await this.usersService.signUp(dto);
    return { message: 'User Created' };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.loginUser(dto);
    return {message:'user logged in'}
  }
}
