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
  return newCountry.save();
}

export function getCountryByCode(code: string): Promise<Country | null> {
  return Country.findOne({ where: { code: code } });
}
