module.exports = class MortgageParser {
    constructor() {
        const mortgageParserJsonix = new (require('./../index').MortgageParserJsonix)();

        const zipParser = new (require('./../index').ZipParser)();

        let responseMap = {
            'transferElectronicMortgageDepositary': {
                'comment': '',
                'cadastralNumber': '',
                'status': '',
                'dateDepository': '',

            },
            'noticeReleaseMortgage': {
                'comment': '',
                'cadastralNumber': '',
                'status': '',
                'dateDepository': '',
                'mortgageNumber': '',
            },
            'checkingInformationOwner': {
                'comment': '',
                'cadastralNumber': '',
                'status': '',
                'dateDepository': '',
                'mortgageNumber': '',
                'email': '',
                'surname': '',
                'firstname': '',
                'birthDate': '',
                'birthPlace': '',
                'documentTypeCode': '',
                'passport_number': '',
                'passport_series': '',
                'firstOwnerKind': ''
            },
            'directionAgreement': {
                'comment': '',
                'cadastralNumber': '',
                'status': '',
                'dateReceiptAgreement': '',
                'mortgageNumber': '',
            },
            'noticeRedemption': {
                'comment': '',
                'cadastralNumber': '',
                'status': '',
                'mortgageNumber': '',
            }
        };
    };

    parseZip(data, type) {
        let ret = {};
        let zipRes = '';

        if (type === '0') { //Zip
            zipRes = this.zipParser.parseZip(data, this.responseMap);
        }

        if (type === '1') { //DataUrl
            zipRes = this.zipParser.parseDataUrl(data, this.responseMap);
        }

        ret.request = zipRes;

        if (ret.request.error.length === 0 && ret.request.hasOwnProperty('fileName')) {
            const attachFile = topZip.files[ret.request.fileName];
            const payloadZip = new NodeZip(attachFile._data, {base64: false, checkCRC32: true});

            const payloadRequestFile = payloadZip.files['request.xml'];
            const payloadRequestData = payloadRequestFile._data;

            ret.payloadRequest = this.mortgageParserJsonix.parsePayloadRequest(payloadRequestData);
            // console.log(ret.payloadRequest);

            const payloadFile = payloadZip.files[ret.payloadRequest.fileName];
            ret.payload = payloadFile._data;

            // console.log(payload);
            // console.log(this.mortgageParser.parse(payload));
        }
        return res
    };
};
