import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/create-authentication.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { EmailingService } from 'src/emailing/emailing.service';

@Injectable()
export class AuthenticationService {

  constructor(private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private  emailingService:EmailingService
  ) { }

  async register(dto: RegisterDto) {
    const user = await this.usersService.signUp(dto);
    const token = await this.generateAccessToken(user.user_ID, user.userRole);
    const code = await this.generateSixdigitCode();
    const sendLoginCode = await this.emailingService.sendWelcomeVerificationEmail(user.email,code,user.username)
    return { token };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.loginUser(dto);
    const token = await this.generateAccessToken(user.user_ID, user.userRole);
    const code = await this.generateSixdigitCode();

    const sendLoginCode = await this.emailingService.send2FA_code_ViaEmail(user.email,code,user.username)
    return {token}
  }

  async generateAccessToken(user_ID: string, userRole: string[]): Promise<string> {
    const accessToken = await this.jwtService.sign({ user_ID, userRole })
    return accessToken;
  }

  async generateSixdigitCode():Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    return code;
  }

}
