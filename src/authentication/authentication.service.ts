import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/create-authentication.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { EmailingService } from 'src/emailing/emailing.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

@Injectable()
export class AuthenticationService {

  constructor(private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private emailingService: EmailingService,
    @InjectRedis() private readonly redis: Redis
  ) { }

  async register(dto: RegisterDto) {
    const user = await this.usersService.signUp(dto);
    const token = await this.generateAccessToken(user.user_ID, user.userRole);
    const code = await this.generateSixdigitCode(user.email)
    const sendLoginCode = await this.emailingService.sendWelcomeVerificationEmail(user.email, code, user.username)
    return { token };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.loginUser(dto);
    const token = await this.generateAccessToken(user.user_ID, user.userRole);
    const code = await this.generateSixdigitCode(user.email)

    const sendLoginCode = await this.emailingService.sendPasswordResetCode(user.email, code, user.username)
    return { token }
  }

  async verifyLoginCode(email: string, code: string) {
    await this.verifyResetCode(email, code);
    const user = await this.usersService.findByEmail(email);
    const token = await this.generateAccessToken(user.user_ID, user.userRole);
    return { token };
  }

  async forgetPassword(email) {
    console.log(email)
    const user = await this.usersService.forgetPassword(email)
    console.log(user)
    const code = await this.generateSixdigitCode(email)
    const sendLoginCode = await this.emailingService.sendPasswordResetCode(email, code, user.username)
  }

  async changePassword(email: string, newPassword: string, code: string) {

    await this.verifyResetCode(email, code)
    await this.usersService.changePasswordWithCode(email, newPassword)
    await this.clearResetCode(email)
    return { message: "PasswordChanged" }
  }

  async generateAccessToken(user_ID: string, userRole: string[]): Promise<string> {
    const accessToken = await this.jwtService.sign({ user_ID, userRole })
    return accessToken;
  }

  async generateSixdigitCode(email): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await this.redis.set(`reset-code:${email}`, code, 'EX', 600);
    return code;
  }

  async verifyResetCode(email: string, inputCode: string): Promise<boolean> {
    const storedCode = await this.redis.get(`reset-code:${email}`);
    if (storedCode !== inputCode) {
      throw new UnauthorizedException("Invalid Code");
    }
    return true
  }

  async clearResetCode(email: string): Promise<void> {
    await this.redis.del(`reset-code:${email}`);
  }

}
