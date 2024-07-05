import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class user {

  @PrimaryGeneratedColumn()
  userID : number;

  @Column()
  userName : string;

  @Column()
  password : string;

  @Column()
  isActive : boolean;
}
