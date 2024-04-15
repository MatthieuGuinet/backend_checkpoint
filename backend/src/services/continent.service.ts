import { Continent } from "../entities/continent";
import { Country } from "../entities/country";

export function getContinent(): Promise<Continent[]> {
  return Continent.find();
}

export function getCountries(continentCode: number): Promise<Country[]> {
  return Country.find({ where: { continent: { id: continentCode } } });
}

export function createContinent(continentDatas: {
  code: string;
  name: string;
}): Promise<Continent> {
  const newContinent = new Continent(continentDatas);
  return newContinent.save();
}

export function getContinentByCode(code: string): Promise<Continent | null> {
  return Continent.findOne({ where: { code: code } });
}
