const client = platformClient.ApiClient.instance;
const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.eu_central_1);

var clientId = "";
var redirectUri = "";

// Method1: Let loginPKCEGrant generate the code verifier
client.loginPKCEGrant(clientId, redirectUri, { state: state })
  .then((data) => {
    console.log(data);
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
