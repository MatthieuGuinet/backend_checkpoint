import { Country } from "../entities/country";

export function getCountries(): Promise<Country[]> {
  return Country.find();
}

export function createCountry(countryDatas: {
  code: string;
  name: string;
  emoji: string;
}): Promise<Country> {
  const newCountry = new Country(countryDatas);
  console.log(newCountry);
  return newCountry.save();
}
