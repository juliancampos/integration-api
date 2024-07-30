import HubSoftApi from "../../client/hubsoft/index.js";

const hubsoft = new HubSoftApi();

const {
  HUBSOFT_CLIENT_ID,
  HUBSOFT_CLIENTE_SECRET,
  HUBSOFT_USERNAME,
  HUBSOFT_USER_PASSWORD,
  HUBSOFT_GRANT_TYPE
} = process.env;

const requestToken = async () => {
  const authData = {
    client_id: HUBSOFT_CLIENT_ID,
    client_secret: HUBSOFT_CLIENTE_SECRET,
    username: HUBSOFT_USERNAME,
    password: HUBSOFT_USER_PASSWORD,
    grant_type: HUBSOFT_GRANT_TYPE
  };

  const result = await hubsoft.auth(authData);
  return result;
};

export default requestToken;
