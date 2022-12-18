import { Product } from '../products/products.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './orders.entity';

@Entity('orderItem')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product  

  @Column()
  qty: number  

  // Store the price when checkout the order, the price in Product Entity could be change in the future.
  @Column({ type: 'float' })
  checkoutPrice: number 

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @ManyToOne(() => Order, order => order.items)
  order: Order;
}
