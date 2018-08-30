
module.exports = class MortgageParser {
    constructor() {
        this.mortgageParserJsonix = new (require('./index').MortgageParserJsonix)();
    };

    parseZip(data, type) {
        const ret = {errors: []};
        try {
            let zipRes = '';
            const zipParser = new (require('./index').ZipParser)();
            if (type === '0') { //Zip
                zipRes = zipParser.parseZip(data);
            }

            if (type === '1') { //DataUrl
                zipRes = zipParser.parseDataUrl(data);
            }

            ret.request = zipRes;

            if (ret.request.error.length === 0 && ret.request.hasOwnProperty('fileName')) {
                const attachFile = topZip.files[ret.request.fileName];
                const payloadZip = new NodeZip(attachFile._data, {base64: false, checkCRC32: true});

                const payloadRequestFile = payloadZip.files['request.xml'];
                const payloadRequestData = payloadRequestFile._data;

                ret.payloadRequest = mortgageParserJsonix.parsePayloadRequest(payloadRequestData);
                // console.log(ret.payloadRequest);

                const payloadFile = payloadZip.files[ret.payloadRequest.fileName];
                ret.payload = payloadFile._data;

                // console.log(payload);
                // console.log(this.mortgageParser.parse(payload));
            }
            return ret;
        }
        catch (e) {
            ret.errors.push(e);
        }


    };

    generateResponse(request_type, data) {
        const ret = {errors: []};
        try {
            ret.response = this.mortgageParserJsonix.generateResponse(request_type, data)['response'];
            return ret
        }
        catch (e) {
            ret.errors.push(e);
        }
    };
};
