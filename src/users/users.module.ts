import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Merchant } from 'src/merchant/entities/merchant.entity';
import { DeveloperApi } from 'src/developer-api/entities/developer-api.entity';
import { Wallet } from 'src/wallets/entities/wallet.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Subscription } from 'src/subscription-api/entities/subscription-api.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Merchant,DeveloperApi,Wallet,Transaction,Subscription])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[
    UsersService,TypeOrmModule,
  ]
})
export class UsersModule {}
