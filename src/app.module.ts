import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BanksApiModule } from './banks-api/banks-api.module';
import { MobileMoneyApiModule } from './mobile-money-api/mobile-money-api.module';
import { MerchantModule } from './merchant/merchant.module';
import { TransactionModule } from './transaction/transaction.module';
import { WebhookEventsModule } from './webhook-events/webhook-events.module';
import { DeveloperApiModule } from './developer-api/developer-api.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SubscriptionApiModule } from './subscription-api/subscription-api.module';
import { EmailingModule } from './emailing/emailing.module';
import { WalletsModule } from './wallets/wallets.module';
import { SendingSmsModule } from './sending_sms/sending_sms.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeormConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }), UsersModule, BanksApiModule, MobileMoneyApiModule, MerchantModule, TransactionModule, WebhookEventsModule, DeveloperApiModule, AuthenticationModule, SubscriptionApiModule, EmailingModule, WalletsModule, SendingSmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
