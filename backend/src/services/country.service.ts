import { Continent } from "../entities/continent";
import { Country } from "../entities/country";

export function getCountries(): Promise<Country[]> {
  return Country.find({
    relations: {
      continent: true,
    },
  });
}

export async function createCountry(countryDatas: {
  code: string;
  name: string;
  emoji: string;
  continent: string;
}): Promise<Country> {
  const newCountry = new Country(countryDatas);
  const continent = await Continent.findOneBy({ code: countryDatas.continent });
  if (continent) {
    newCountry.continent = continent;
  }
  return newCountry.save();
}

export function getCountryByCode(code: string): Promise<Country | null> {
  return Country.findOne({
    where: { code: code },
    relations: { continent: true },
  });
}
