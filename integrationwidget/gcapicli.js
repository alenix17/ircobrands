const platformClient = require('platformClient');

const client = platformClient.ApiClient.instance;
client.setPersistSettings(true);
const apiInstance = new platformClient.ArchitectApi();

client.setEnvironment(platformClient.PureCloudRegionHosts.eu_central_1);

var clientId = "031c99a3-87b2-4974-9e6c-196c6801656f";
var redirectUri = "";
let codeVerifier = client.generatePKCECodeVerifier(128);
let codeChallenge = client.computePKCECodeChallenge(codeVerifier);
let stateunq = codeChallenge;
console.log("challenge: " + codeChallenge);

// Method1: Let loginPKCEGrant generate the code verifier
client.loginPKCEGrant(clientId, redirectUri, { state: stateunq })
  .then((data) => {
    // Do authenticated things
    if(data.state != stateunq) {
      console.log("HACK state");
      throw new Error("HackState");
    }
    console.log(data);
    getMessaggioDiSala();
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });

function getMessaggioDiSala() {
let datatableId = "05444a9f-4e75-4cb8-8d93-4fce32125c79"; // String | id of datatable
let opts = { 
  "showbrief": false
};

// Returns the rows for the datatable with the given id
apiInstance.getFlowsDatatableRow(datatableId, "default", opts)
  .then((data) => {
    console.log("getFlowsDatatableRow success! data:" + JSON.stringify(data));
    document.getElementById("broadcastId").innerHTML = data.message;

  })
  .catch((err) => {
    console.log("There was a failure calling getFlowsDatatableRow");
    console.error(err);
  });
}
