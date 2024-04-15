import "reflect-metadata";
import createServer from "./config/server";

import sqlite3 from "sqlite3";

const port: number = 3001;

const start = async () => {
  const db = new sqlite3.Database("./checkpoint_backend.sqlite");
  const server = await createServer();

  try {
    const { url } = await server.listen({ port });
    console.log(`Server running at ${url}`);
  } catch (err) {
    console.error("Error starting the server");
  }
};

void start();
