import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

import { ObjectType, Field } from "type-graphql";
import { Country } from "./country";

@Entity()
@ObjectType()
export class Continent extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ unique: true })
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Field(() => [Country], { nullable: true })
  @OneToMany(() => Country, (countries) => countries.continent)
  countries?: Country[];

  constructor(
    datas: {
      code: string;
      name: string;
    } | null = null
  ) {
    super();
    if (datas) {
      this.code = datas.code;
      this.name = datas.name;
    }
  }
}
