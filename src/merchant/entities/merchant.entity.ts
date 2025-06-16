import { Transaction } from "src/transaction/entities/transaction.entity";
import { User } from "src/users/entities/user.entity";
import { Wallet } from "src/wallets/entities/wallet.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MerchantVerificationStatus } from "../enum/merchant.enum";
import { Subscription } from "src/subscription-api/entities/subscription-api.entity";

@Entity()
export class Merchant {
    @PrimaryGeneratedColumn('uuid')
    merchant_ID: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @Column()
    bussinessName: string;

    @Column({ type: 'enum', enum: MerchantVerificationStatus, default: MerchantVerificationStatus.NOT_VERIFIED })
    verificationStatus: MerchantVerificationStatus;

    @OneToMany(() => Wallet, wallet => wallet.merchant)
    wallets: Wallet[];

    @OneToMany(() => Transaction, transaction => transaction.merchant)
    transactions: Transaction[];

    @OneToMany(() => Subscription, subscription => subscription.merchant)
    subscriptions: Subscription[];
}
