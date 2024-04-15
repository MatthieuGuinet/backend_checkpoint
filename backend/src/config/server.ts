import * as dotenv from "dotenv";
import { dataSource } from "./db";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";

async function createServer(
  customContext: any = undefined
): Promise<ApolloServer> {
  dotenv.config();
  await dataSource.initialize();

  const schema = await buildSchema({
    // resolvers: [
    // ],
    // validate: { forbidUnknownValues: false },
  });

  return new ApolloServer({
    schema,
  });
}

export default createServer;
