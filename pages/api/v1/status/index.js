import database from "infra/database";

async function status(_request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  response.status(200).json({ status: "ok" });
}

export default status;
