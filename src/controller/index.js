
import dbConfig from '../database/index.js'
import model from '../model/index.js'

async function information(req, res) {

  let db = await dbConfig()
  let response = await model.getInformation(db)
  res.status(200).json(response)
}


export default { information }
