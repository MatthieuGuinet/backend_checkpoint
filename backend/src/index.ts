import "reflect-metadata";
import createServer from "./config/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const start = async () => {
  const server = await createServer();

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`Server running at ${url}`);
  } catch (err) {
    console.error("Error starting the server");
  }
};

void start();
