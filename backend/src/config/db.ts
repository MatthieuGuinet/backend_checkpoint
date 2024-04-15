import { DataSource } from "typeorm";
import { Country } from "../entities/country";
import { Continent } from "../entities/continent";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./checkpoint_2.sqlite",
  entities: [Country, Continent],
  logging: true,
  synchronize: true,
});
