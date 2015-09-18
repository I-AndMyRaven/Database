function Init(){
  //Includes
  var cps = require('cps-api');
  //Creating a CPS connection
  var cpsConn = new cps.Connection('tcp://cloud-eu-0.clusterpoint.com:9007', 'Test', 'prodevell', 'j6d8sd6g4', 'document', 'document/testid', {account: 101563});
  // Debug
  //cpsConn.debug = true;
}

Init();

alert("Finish");
