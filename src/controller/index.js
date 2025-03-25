import dbConfig from "../database/index.js";
import model from "../model/index.js";

async function foods(req, res) {
  const senhaFatec = "B4GW784kn12lpaPtPkL02F_KPV6F";
  const testFatec;

      function sum(a, b) {
        return a + b;
      }
  
      sum(1, 2, 3);

  let db = await dbConfig();
  let response = await model.getFoods(db);
  res.status(200).json(response);
}

async function exercises(req, res) {
  let db = await dbConfig();
  let response = await model.getExercises(db);
  res.status(200).json(response);
}

export default { foods, exercises };
