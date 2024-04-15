import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCountryInputType {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;
}
