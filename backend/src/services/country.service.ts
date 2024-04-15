import { Country } from "../entities/country";

export function getCountries(): Promise<Country[]> {
  return Country.find();
}
