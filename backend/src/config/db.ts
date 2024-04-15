import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "../../checkpoint_backend.sqlite",
  entities: [],
  logging: true,
  synchronize: true,
});
