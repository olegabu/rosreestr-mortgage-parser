const NodeZip = require('node-zip');

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

            ret.request = zipRes['request'];

            if (ret.request.hasOwnProperty('fileName') && ret.request.fileName.match(/\.(zip)$/i)) {
                const attachFile = zipRes.topZip.files[ret.request.fileName];
                const payloadZip = new NodeZip(attachFile._data, {base64: false, checkCRC32: true});
                const payloadRequestFile = payloadZip.files['request.xml'];
                const payloadRequestData = payloadRequestFile._data;
                ret.payloadRequest = this.mortgageParserJsonix.parsePayloadRequest(payloadRequestData);
                const payloadFile = payloadZip.files[ret.payloadRequest.fileName];
                ret.payload = this.mortgageParserJsonix.parseMortgage(payloadFile._data);
                if (ret.request.requestType === 'directionAgreement'){
                    ret.payload.regNumber = ret.request.mortgageNumber;
                    ret.payload.cadastralNumber = ret.request.cadastralNumber;
                }
            }
            else if (ret.request.hasOwnProperty('fileName') && ret.request.fileName.match(/\.(xml)$/i)){
                ret.payload = {};
                ret.payload = this.mortgageParserJsonix.parseMortgage(zipRes.topZip.files[ret.request.fileName]._data);
            }

            else if (['noticeRedemption', 'checkingInformationOwner'].indexOf(ret.request.requestType > 0)){
                ret.payload = {};
                if (ret.request.requestType === 'checkingInformationOwner') {
                    ret.payload.regNumber = ret.request.value.operation.transferAgreement.checkingInformationOwner.mortgageNumber;
                }
                else {
                ret.payload.regNumber = ret.request.mortgageNumber;
                }
                ret.payload.cadastralNumber = ret.request.cadastralNumber;
            }
            return ret;
        }
        catch (e) {
            ret.errors.push(e);
            return ret;
        }
    };

    generateResponse(request_type, response_args) {
        const ret = {errors: []};
        try {
            ret.response = this.mortgageParserJsonix.generateResponse(request_type, response_args)['response'];
            if (ret.response === 1) {
                ret.errors.push('Incorrect response_args (data types or format) for parser: ' + JSON.stringify(response_args))
            }
            return ret;
        }
        catch (e) {
            ret.errors.push(e);
            return ret;
        }
    };
};
