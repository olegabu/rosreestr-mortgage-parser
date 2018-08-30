const NodeZip = require('node-zip');

module.exports = class ZipParser {
    constructor() {
        this.mortgageParserJsonix = new (require('./index').MortgageParserJsonix)();
    };

    parseDataUrl(dataUrl) {
        const parts = dataUrl.split(',');
        // console.log(parts);

        return this.parseZip(Buffer.from(parts[1], 'base64'));
    }

    parseZip(data) {
        const zipFile = new NodeZip(data, {base64: false, checkCRC32: true});

        const ret = {errors: []};
        try {
            if (zipFile.files['request.xml']) {
                const requestFile = zipFile.files['request.xml'];
                const requestData = requestFile._data;

                for (const key in global.responseMap) {
                    if (requestData.includes(key.slice(1,))) {
                        ret.topZip = zipFile;
                        ret.request = this.mortgageParserJsonix.parseRequest(requestData);
                        return ret;
                    }
                }
                ret.request = this.mortgageParserJsonix.parsePayloadRequest(requestData);

                return ret;
            }
            else {
                return ret.errors.push('Unable to look file request.xml')
            }
        }
        catch (e) {
            ret.errors.push(e);
        }

    }
};

