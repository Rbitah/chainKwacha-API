import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginDto, RegisterDto } from './dto/create-authentication.dto';


@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("signup")
  signup(@Body() registerDto: RegisterDto) {
    return this.authenticationService.register(registerDto);
  }

  @Post("login")
  login(@Body() loginDto:LoginDto){
    return this.authenticationService.login(loginDto)
  }
}
