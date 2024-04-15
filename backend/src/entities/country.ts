import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { ObjectType, Field } from "type-graphql";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  code: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  emoji?: string;

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
