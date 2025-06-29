import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
} from 'typeorm';
import { Merchant } from 'src/merchant/entities/merchant.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { SubscriptionStatus } from '../enum/subscription.enum';
import { BillingCycle } from '../enum/subscription.enum';
import { Wallet } from 'src/wallets/entities/wallet.entity';

@Entity()
export class Subscription {
    @PrimaryGeneratedColumn('uuid')
    subscription_ID: string;

    @Column()
    planName: string;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column({ type: 'enum', enum: SubscriptionStatus, default: SubscriptionStatus.PENDING })
    status: SubscriptionStatus;

    @Column({ type: 'enum', enum: BillingCycle, default: BillingCycle.MONTHLY })
    billingCycle: BillingCycle;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column({ default: false })
    autoRenew: boolean;

    @ManyToOne(() => Merchant, { nullable: false })
    @JoinColumn()
    merchant: Merchant;

    @ManyToOne(() => Wallet, { nullable: false })
    @JoinColumn()
    wallet: Wallet;

    @ManyToOne(() => Transaction, { nullable: true })
    @JoinColumn()
    transaction: Transaction;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
