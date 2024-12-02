import { CloudantV1 } from "@ibm-cloud/cloudant";
import { IamAuthenticator } from "ibm-cloud-sdk-core";

const { APIKEY, DB_URL } = process.env;

async function dbConfig() {
  try {
    const authenticator = new IamAuthenticator({
      apikey: APIKEY,
    });

    const service = new CloudantV1({
      authenticator: authenticator,
    });

    service.setServiceUrl(DB_URL);

    return service;
  } catch (error) {
    console.log({ error });
    return { error };
  }
}

export default dbConfig;
