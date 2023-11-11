import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://aymciypq:VP7h35Y0A6SK4deKc65Q3_PkszGLjC4P@bubble.db.elephantsql.com/aymciypq"
  );
  await client.connect();
  return client;
}
