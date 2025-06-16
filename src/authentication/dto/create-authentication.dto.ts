import { IsEmail, IsNotEmpty, MinLength, Matches, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'Password too weak',
  })
  password: string;

  @IsOptional()
  phoneNumber?: string;
}


export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

