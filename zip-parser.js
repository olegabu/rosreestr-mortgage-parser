const MortgageParser = require('./mortgage-parser-node');
const NodeZip = require('node-zip');

module.exports = class ZipParser {

  constructor() {
    this.mortgageParser = new MortgageParser();
  }

  parseDataUrl(dataUrl) {
    const parts = dataUrl.split(',');
    console.log(parts);

    return this.parse(Buffer.from(parts[1], 'base64'));
  }

  parse(data) {
    const ret = {};

    const topZip = new NodeZip(data, {base64: false, checkCRC32: true});

    // console.log(topZip.files);

    const requestFile = topZip.files['request.xml'];
    const requestData = requestFile._data;

    // console.log(requestData);

    ret.request = this.mortgageParser.parseRequest(requestData);
    // console.log(ret.request);

    const payloadZipFile = topZip.files[ret.request.fileName];
    const payloadZipData = payloadZipFile._data;

    const payloadZip = new NodeZip(payloadZipData, {base64: false, checkCRC32: true});

    // console.log(payloadZip.files);

    const payloadRequestFile = payloadZip.files['request.xml'];
    const payloadRequestData = payloadRequestFile._data;

    ret.payloadRequest = this.mortgageParser.parsePayloadRequest(payloadRequestData);
    // console.log(ret.payloadRequest);

    const payloadFile = payloadZip.files[ret.payloadRequest.fileName];
    ret.payload = payloadFile._data;

    // console.log(payload);
    // console.log(this.mortgageParser.parse(payload));

    return ret;
  }
};

