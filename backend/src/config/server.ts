import { dataSource } from "./db";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { CountryResolver } from "../resolvers/country.resolver";
import { ContinentResolver } from "../resolvers/continent.resolver";

async function createServer(): Promise<ApolloServer> {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver, ContinentResolver],
    validate: { forbidUnknownValues: false },
  });

  return new ApolloServer({
    schema,
  });
}

export default createServer;
