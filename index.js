function Init(){
  //Includes
  var cps = require('cps-api');
  //Creating a CPS connection
  var cpsConn = new cps.Connection(  'tcp://cloud-eu-0.clusterpoint.com:9007', 'DB_NAME', 'USERNAME', 'PASSWORD', 'document', 'document/id', {account: YOUR_ACCOUNT_ID});
  // Debug
  //cpsConn.debug = true;
}
