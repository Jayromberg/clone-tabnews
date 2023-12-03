import database from "../../../../infra/database";

function status(_request, response) {
  response.status(200).json({ status: "ok" });
}

export default status;
