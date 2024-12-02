import dbConfig from "../database/index.js";
import model from "../model/index.js";

async function foods(req, res) {
  let db = await dbConfig();
  let response = await model.getFoods(db);
  res.status(200).json(response);
}

export default { foods };
