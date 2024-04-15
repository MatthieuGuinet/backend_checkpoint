import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

import { ObjectType, Field } from "type-graphql";
import { Continent } from "./continent";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ unique: true })
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji?: string;

  @Field(() => Continent)
  @ManyToOne(() => Continent, (continent) => continent.countries)
  continent: Continent;

  constructor(
    datas: {
      code: string;
      name: string;
      emoji: string;
    } | null = null
  ) {
    super();
    if (datas) {
      this.code = datas.code;
      this.name = datas.name;
      this.emoji = datas.emoji;
    }
  }
}
