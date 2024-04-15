import { Field, InputType } from "type-graphql";

@InputType()
export class CreateContinentInputType {
  @Field()
  code: string;

  @Field()
  name: string;
}
