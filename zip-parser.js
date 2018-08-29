const MortgageParser = require('./mortgage-parser-jsonix');

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

    parseZip(data, responseMap) {

        const ret = {};

        const zipFile = new NodeZip(data, {base64: false, checkCRC32: true});

        if (zipFile.files['request.xml']) {
            const requestFile = zipFile.files['request.xml'];
            const requestData = requestFile._data;

            for (const key in responseMap) {
                if (key in requestData) {
                    ret.request = this.mortgageParser.parseRequest(requestData);
                }
                else {
                    ret.request = this.mortgageParser.parsePayloadRequest(requestData);
                }
                return ret
            }
        }
        else {
            return ret.errors.push('Unable to look file request.xml')
        }
    }
};

