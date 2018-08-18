const MortgageParser = require('./index');

const fs = require('fs');
const NodeZip = require('node-zip');

const mortgageParser = new MortgageParser();

fs.readFile("mortgage_request.zip", (err, data) => {
  const topZip = new NodeZip(data, {base64: false, checkCRC32: true});

  console.log(topZip.files);

  const requestFile = topZip.files['request.xml'];
  const requestData = requestFile._data;

  console.log(requestData);
  
  const request = mortgageParser.parseRequest(requestData); 
  console.log(request);

  const payloadZipFile = topZip.files[request.fileName];
  const payloadZipData = payloadZipFile._data;

  const payloadZip = new NodeZip(payloadZipData, {base64: false, checkCRC32: true});

  console.log(payloadZip.files);

  const payloadRequestFile = payloadZip.files['request.xml'];
  const payloadRequestData = payloadRequestFile._data;

  const payloadRequest = mortgageParser.parseRequest(payloadRequestData);
  console.log(payloadRequest);

  const payloadFile = payloadZip.files[payloadRequest.fileName];
  const payload = payloadFile._data;

  console.log(payload);
  console.log(mortgageParser.parse(payload));
});
