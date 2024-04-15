import { Arg, Query, Resolver, Mutation } from "type-graphql";
import { Country } from "../entities/country";
import * as CountryService from "../services/country.service";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  country(): Promise<Country[]> {
    return CountryService.getCountries();
  }
}
