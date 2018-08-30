const NodeZip = require('node-zip');

module.exports = class ZipParser {
    constructor() {
        const mortgageParserJsonix = new (require('./index').MortgageParserJsonix)();
    };

    parseDataUrl(dataUrl) {
        const parts = dataUrl.split(',');
        // console.log(parts);

        return this.parseZip(Buffer.from(parts[1], 'base64'));
    }

    parseZip(data, responseMap) {

        const ret = {};

        const zipFile = new NodeZip(data, {base64: false, checkCRC32: true});

        if (zipFile.files['request.xml']) {
            const requestFile = zipFile.files['request.xml'];
            const requestData = requestFile._data;

            for (const key in responseMap) {
                if (key in requestData) {
                    ret.request = this.mortgageParserJsonix.parseRequest(requestData);
                }
                else {
                    ret.request = this.mortgageParserJsonix.parsePayloadRequest(requestData);
                }
                return ret
            }
        }
        else {
            return ret.errors.push('Unable to look file request.xml')
        }
    }
};

