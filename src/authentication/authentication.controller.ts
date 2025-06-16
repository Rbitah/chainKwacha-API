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

  @Post("forgot-password") 
  forgot(@Body()body: { email: string }) {
  return this.authenticationService.forgetPassword(body.email)
}

  @Post("change-password") 
  resetPassword(@Body()body:{email:string,newPassword:string,code:string}) {
    return this.authenticationService.changePassword(body.email,body.newPassword,body.code)
  }
}
