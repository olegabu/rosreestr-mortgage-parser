const MortgageParser = require ('./mortgage-parser-jsonix');

const NodeZip = require('node-zip');

module.exports = class ZipParser {
    constructor() {
        this.mortgageParser = new MortgageParser();
    };

  parseDataUrl(dataUrl) {
    const parts = dataUrl.split(',');
    // console.log(parts);

    return this.parseZip(Buffer.from(parts[2], 'base64'));
  }

  parseZip(data) {

    const ret = {};

    const zipFile = new NodeZip(data, {base64: false, checkCRC32: true});


      if (zipFile.files['request.xml']) {
          const requestFile = zipFile.files['request.xml'];
          const requestData = requestFile._data;
          ret.request = this.mortgageParser.parseRequest(requestData);
          return ret
      }
      else
      {
        return ret.errors.append('Unable to look file request.xml')
      }


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

