import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../enum/user-roles.enum";
import { Merchant } from "src/merchant/entities/merchant.entity";
import { DeveloperApi } from "src/developer-api/entities/developer-api.entity";
import { Wallet } from "src/wallets/entities/wallet.entity";

@Entity("User")
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_ID: string;

    @Column()
    fullName: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
    userRole: UserRole[];

    @Column()
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Merchant, merchant => merchant.user, { cascade: true, nullable: true })
    merchantProfile: Merchant;

    @OneToOne(() => DeveloperApi, developerApi => developerApi.user, { cascade: true, nullable: true })
    developerProfile: DeveloperApi;

    @OneToMany(() => Wallet, wallet => wallet.user)
    wallets: Wallet[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
