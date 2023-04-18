import { Column, Entity } from 'typeorm';
import { BaseColumnEntity } from './base.entity';

@Entity('product')
export class ProductEntity extends BaseColumnEntity {
  @Column({ nullable: false })
  product_name: string;

  @Column({ nullable: false })
  product_price: number;
}
