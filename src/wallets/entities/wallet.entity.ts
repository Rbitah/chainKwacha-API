import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Merchant } from 'src/merchant/entities/merchant.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

export enum WalletType {
  CUSTOMER = 'CUSTOMER',
  MERCHANT = 'MERCHANT',
  AGENT = 'AGENT',
  CHAINKWACHA = 'CHAINKWACHA',
}

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  wallet_ID: string;

  @Column({ type: 'enum', enum: WalletType })
  type: WalletType;

  @Column({ type: 'decimal', precision: 18, scale: 2, default: 0 })
  balance: number;

  @Column({ default: 'MWK' })
  currency: string;

  @ManyToOne(() => User, user => user.wallets, { nullable: true })
  user: User;

  @ManyToOne(() => Merchant, merchant => merchant.wallets, { nullable: true })
  merchant: Merchant;

  @OneToMany(() => Transaction, transaction => transaction.fromWallet)
  outgoingTransactions: Transaction[];

  @OneToMany(() => Transaction, transaction => transaction.toWallet)
  incomingTransactions: Transaction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
