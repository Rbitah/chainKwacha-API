import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from 'src/authentication/dto/create-authentication.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async signUp(dto: RegisterDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({ where: { email: dto.email } });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.userRepository.create({ ...dto, password: hash });
    return this.userRepository.save(user);
  }

  async loginUser(dto) {
    const user = await this.userRepository.findOne({ where: { email: dto.email } });
     
    if (!user) {
      throw new NotFoundException("User Not Found")
    }
    const isPassValid = await bcrypt.compare(dto.password, user.password)

    if (!isPassValid) {
      throw new UnauthorizedException("Invalid credentials")
    }
    return user;
  }
  async forgetPassword(email:string) {

      if (typeof email !== 'string') {
    throw new BadRequestException('Invalid email format');
  }
    
    const emailL = String(email).trim().toLowerCase();
const user = await this.userRepository.findOne({
  where: { email: emailL },
});

    console.log(emailL)
    if (!user) {
      throw new NotFoundException("User Not found")
    }
    return user;
  }

  async changePasswordWithCode(email, newPassword) {
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (!user) {
      throw new NotFoundException("User Not found")
    }
    const password=newPassword;
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await this.userRepository.save(user);
  }

}
