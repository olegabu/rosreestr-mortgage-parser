const MortgageParser = require('./mortgage-parser');
const MortgageParserNode = require('./mortgage-parser-node');
const MortgageParserJsonix = require('./mortgage-parser-jsonix');
const ZipParser = require('./zip-parser');

global.responseMap = {
    'transferElectronicMortgageDepositary': {
        'comment': '',
        'cadastralNumber': '',
        'status': '',
        'dateDepository': '',
        'response_function': 'getNoticeReceiptMortgageResponse'

    },
    'noticeReleaseMortgage': {
        'comment': '',
        'cadastralNumber': '',
        'status': '',
        'dateDepository': '',
        'mortgageNumber': '',
        'response_function': 'getNoticeReleaseMortgageResponse'
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
        'firstOwnerKind': '',
        'response_function': 'getNoticeCheckingInformationOwner'
    },
    'directionAgreement': {
        'comment': '',
        'cadastralNumber': '',
        'status': '',
        'dateReceiptAgreement': '',
        'mortgageNumber': '',
        'response_function': 'getChangeNotificationResponse'
    },
    'noticeRedemption': {
        'comment': '',
        'cadastralNumber': '',
        'status': '',
        'mortgageNumber': '',
        'response_function': 'getNoticeRedemptionResponse'
    }
};

module.exports = {
  MortgageParser: MortgageParser,
  MortgageParserNode: MortgageParserNode,
  MortgageParserJsonix: MortgageParserJsonix,
  ZipParser: ZipParser,
};
