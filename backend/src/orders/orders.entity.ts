import { Customer } from '../customers/customers.entity';
import { PromotionCode } from '../promotion-code/promotion-code.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItem } from './order-items.entity';
import { Float } from '@nestjs/graphql';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OrderItem, orderItem => orderItem.order, { eager: true, cascade: ['insert'] })
  items: OrderItem[]

  @Column({ type: 'float' })
  totalPrice: number

  @Column({ type: 'jsonb', nullable: true })
  additionalInfo?: any

  @Column({nullable: true})
  promotionCodeId?: string

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Customer, customer => customer.orders, { eager: true, cascade: ['insert'], nullable: true })
  customer?: Customer
}
