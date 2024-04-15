import { Arg, Query, Resolver, Mutation } from "type-graphql";
import { Country } from "../entities/country";
import { Continent } from "../entities/continent";
import * as ContinentService from "../services/continent.service";
import { CreateContinentInputType } from "../types/createContinentInputType";

@Resolver(Continent)
export class ContinentResolver {
  @Query(() => [Continent])
  continents(): Promise<Continent[]> {
    return ContinentService.getContinent();
  }

  @Query(() => Continent, { nullable: true })
  continentByCode(@Arg("code") code: string): Promise<Continent | null> {
    return ContinentService.getContinentByCode(code);
  }

  @Mutation(() => Continent)
  createContinent(
    @Arg("continent") continent: CreateContinentInputType
  ): Promise<Continent> {
    return ContinentService.createContinent({ ...continent });
  }
}
