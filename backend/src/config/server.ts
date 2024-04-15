import { dataSource } from "./db";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { CountryResolver } from "../resolvers/country.resolver";

async function createServer(
  customContext: any = undefined
): Promise<ApolloServer> {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
    validate: { forbidUnknownValues: false },
  });

  return new ApolloServer({
    schema,
  });
}

export default createServer;
