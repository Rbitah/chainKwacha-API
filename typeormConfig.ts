import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { Merchant } from 'src/merchant/entities/merchant.entity';
import { DeveloperApi } from 'src/developer-api/entities/developer-api.entity';
import { Wallet } from 'src/wallets/entities/wallet.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Subscription } from 'src/subscription-api/entities/subscription-api.entity';
import { TreeRepositoryNotSupportedError } from 'typeorm';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',        
  password: '',
  database: 'oneBank',
  entities: [User,Merchant,DeveloperApi,Wallet,Transaction,Subscription],
  synchronize: false,
  logging: true,
});
