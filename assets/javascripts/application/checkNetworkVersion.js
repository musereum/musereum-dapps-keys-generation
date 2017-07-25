//check current network page is connected to. Alerts, if not Oracles network
function checkNetworkVersion(web3, cb) {
  var msgNotOracles = "You aren't connected to Soundchain network. Please, switch on Soundchain plugin and choose Soundchain network.";
  web3.version.getNetwork(function(err, netId) {
    if (err)
      console.log(err);
    console.log("netId: " + netId);
    switch (netId) {
      case "1": {
        console.log('This is mainnet');
        swal("Warning", msgNotOracles, "warning");
        cb(false);
      } break;
      case "2": {
        console.log('This is the deprecated Morden test network.');
        swal("Warning", msgNotOracles, "warning");
        cb(false);
      } break;
      case "3": {
        console.log('This is the ropsten test network.');
        swal("Warning", msgNotOracles, "warning");
        cb(false);
      }  break;
       case "9498256": {
         console.log('This is Soundchain from Metamask');
         cb(true);
      }  break;
      default: {
        console.log('This is an unknown network.');
        swal("Warning", msgNotOracles, "warning");
        cb(false);
      } break;
    }
  })
}