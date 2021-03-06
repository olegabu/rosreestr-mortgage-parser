const fs = require('fs');
const assert = require('assert');
const _ = require('lodash');

const mortgageResponseJsonix = new (require('./../index').MortgageResponseJsonix)();
const mortgageParserJsonix = new (require('./../index').MortgageParserJsonix)();
const btf = require('beautify');

// Search differences between objects.

function getObjectDiff(obj1, obj2) {
    const diff = Object.keys(obj1).reduce((result, key) => {
        if (!obj2.hasOwnProperty(key)) {
            result.push(key);
        } else if (_.isEqual(obj1[key], obj2[key])) {
            const resultKeyIndex = result.indexOf(key);
            result.splice(resultKeyIndex, 1);
        }
        //console.log(result);
        return result;
    }, Object.keys(obj2));

    return diff;
}

const BASE_ROOT = './test/resources/';

// Description all test files
const testMap = {
    'transferElectronicMortgageDepositary': {
        'comment': 'Принят',
        'cadastralNumber': ['80:82302323:23322'],
        'status': 'true',
        'dateDepository': '2018-05-28',
        'response_function': 'getNoticeReceiptMortgageResponse',
        'request_file': 'Request4.xml', 'response_file': 'Response4.xml',

    },
    'noticeReleaseMortgage': {
        'comment': 'Принят',
        'cadastralNumber': ['80:82302323:23322'],
        'status': 'true',
        'dateDepository': '2018-05-28',
        'mortgageNumber': '1312312312',
        'response_function': 'getNoticeReleaseMortgageResponse',
        'request_file': 'Request3.xml', 'response_file': 'Response3.xml',

    },
    'checkingInformationOwner': {
        'comment': 'Принят',
        'cadastralNumber': ['80:82302323:23322'],
        'status': 'true',
        'dateDepository': '2018-05-28',
        'mortgageNumber': '80:82302323:23322',
        'email': 'ewew@wwew.ru',
        'surname': 'wew',
        'firstname': 'wewe',
        'birthDate': '2018-05-28',
        'birthPlace': 'adww',
        'documentTypeCode': '008001001000',
        'passport_number': '234232',
        'passport_series': '223424',
        'firstOwnerKind': '359000000100',
        'response_function': 'getNoticeCheckingInformationOwner',
        'request_file': 'Request2.xml', 'response_file': 'Response2.xml',
    },
    'directionAgreement': {
        'comment': 'Принят',
        'cadastralNumber': ['80:82302323:23322'],
        'status': 'true',
        'dateReceiptAgreement': '2018-05-28',
        'mortgageNumber': '80:82302323:23322',
        'response_function': 'getChangeNotificationResponse',
        'request_file': 'Request1.xml', 'response_file': 'Response1.xml',
    },
    'noticeRedemption': {
        'comment': 'Принят',
        'cadastralNumber': ['80:82302323:23322'],
        'status': 'true',
        'mortgageNumber': '80:82302323:23322',
        'response_function': 'getNoticeRedemptionResponse',
        'request_file': 'Request0.xml', 'response_file': 'Response0.xml',
    }
};


function testRequestResponse(BASE_ROOT, request_type, request_file, response_file) {

    let request = fs.readFileSync(BASE_ROOT + request_file, 'utf8');
    let request_parser = mortgageParserJsonix.parseRequest(request);
    assert.equal(request_parser.requestType, request_type,
        console.log('\nTest OK, this ' + request_type + ' request'));

    //let model_response = fs.readFileSync(BASE_ROOT + response_file, 'utf8');
    //let model_response_jsonix = mortgageParserJsonix.parseResponse(model_response);
    let response_generator = mortgageResponseJsonix.generateResponse(request_type, testMap[request_type]);
    let response_jsonix = mortgageResponseJsonix.parseResponse(response_generator.response.value);
    console.log(btf(response_generator.response.value, {format: 'xml'}));
    //let diff = getObjectDiff(model_response_jsonix.value, response_jsonix.value);
    //assert.equal(diff.length, 0,
    //    console.log('Test OK, this ' + request_type + ' response'));
    //TODO Verify Response by model Response.
}

console.log('Test request-response parser');

for (let request_type in testMap) {
    testRequestResponse(BASE_ROOT, request_type, testMap[request_type]['request_file'], testMap[request_type]['response_file']);
}

/*
const response_params = {
    'comment': 'Принят',
    'cadastralNumber': [''],
    'status': 'true',
    'dateDepository': '2018-8-31',
    'mortgageNumber': '',
};
*/
//const res = mortgageParser.generateResponse('noticeReleaseMortgage', response_params);


//console.log(res);
