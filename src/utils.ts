import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://aymciypq:***@bubble.db.elephantsql.com/aymciypq"
  );
  await client.connect();
  return client;
}
