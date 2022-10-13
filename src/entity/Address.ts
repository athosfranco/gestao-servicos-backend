import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Customer } from "./Customer";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  cep: string;

  @Column()
  bairro: string;

  @Column()
  logradouro: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: true })
  numero: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @OneToOne(() => Customer, (customer) => customer.addressInfo, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  customer: Customer;
}
