import { Arg, Query, Resolver, Mutation } from "type-graphql";
import { Country } from "../entities/country";
import * as CountryService from "../services/country.service";
import { CreateCountryInputType } from "../types/createCountryInputType";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  country(): Promise<Country[]> {
    return CountryService.getCountries();
  }

  @Mutation(() => Country)
  createCountry(
    @Arg("country") country: CreateCountryInputType
  ): Promise<Country> {
    return CountryService.createCountry({ ...country });
  }
}
