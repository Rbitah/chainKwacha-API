import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PaymentMethod, TransactionStatus, TransactionType } from "../enum/transaction.enum";
import { Merchant } from "src/merchant/entities/merchant.entity";
import { User } from "src/users/entities/user.entity";
import { Wallet } from "src/wallets/entities/wallet.entity";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    transaction_id: string;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @Column({ type: 'enum', enum: TransactionStatus, default: TransactionStatus.PENDING })
    status: TransactionStatus;

    @Column({ type: 'enum', enum: TransactionType })
    type: TransactionType;

    @Column({ type: 'enum', enum: PaymentMethod })
    paymentMethod: PaymentMethod;

    @ManyToOne(() => Merchant, { nullable: true })
    @JoinColumn()
    merchant: Merchant;

    @ManyToOne(() => User, { nullable: true })
    @JoinColumn()
    customer: User;

    @ManyToOne(() => Wallet, { nullable: true })
    @JoinColumn()
    fromWallet: Wallet;

    @ManyToOne(() => Wallet, { nullable: true })
    @JoinColumn()
    toWallet: Wallet;
}
