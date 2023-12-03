import { Client } from "pg";

async function query(queryObject) {
  const client = new Client();
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
