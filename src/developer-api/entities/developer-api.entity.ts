import { Merchant } from "src/merchant/entities/merchant.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class DeveloperApi {
    @PrimaryGeneratedColumn('uuid')
    developer_ID: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(() => Merchant)
    @JoinColumn()
    merchant: Merchant;

    @Column({ unique: true })
    pub_test_API_key: string;

    @Column({ unique: true })
    sec_test_API_key: string;

    @Column({ unique: true })
    pub_live_API_key: string;

    @Column({ unique: true })
    sec_live_API_key: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
