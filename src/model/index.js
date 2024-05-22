// var request = require("request");
import request from "request";

async function getInformation(dbConfig) {
  var options = {
    method: "POST",
    url: "https://oauth.fatsecret.com/connect/token",
    auth: {
      user: "",
      password: "",
    },
    headers: { "content-type": "application/x-www-form-urlencoded" },
    form: {
      grant_type: "client_credentials",
      // scope: "basic",
      scope: "premier",
    },
    json: true,
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    return body;
  });

  // const result = dbConfig.postAllDocs({
  //   db: 'healthy-weight-db',
  //   includeDocs: true
  // }).then(response => {
  //   return response.result.rows
  // });
  // return result
}

export default { getInformation };
