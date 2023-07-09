import { Column, Entity } from "typeorm";
import { BaseColumnEntity } from "./base.entity";

@Entity("computer")
export class ComputerEntity extends BaseColumnEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  brand: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  inStock: boolean;

  @Column({ nullable: true })
  cpu: string;

  @Column({ nullable: true })
  gpu: string;

  @Column({ nullable: true })
  displayScreen: string;

  @Column({ nullable: true })
  ram: string;

  @Column({ nullable: false, default: false, select: false })
  isDel: boolean;
}
