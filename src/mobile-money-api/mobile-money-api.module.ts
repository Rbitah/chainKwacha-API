import { Module } from '@nestjs/common';
import { MobileMoneyApiService } from './mobile-money-api.service';
import { MobileMoneyApiController } from './mobile-money-api.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports:[JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn:configService.get<string>('JWT_EXPIRATION') },
      }),
      inject: [ConfigService],
    }),],
  controllers: [MobileMoneyApiController],
  providers: [MobileMoneyApiService],
})
export class MobileMoneyApiModule {}
