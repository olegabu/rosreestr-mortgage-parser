const fs = require('fs');
const assert = require('assert');
const mortgageParserJsonix = new (require('./../index').MortgageParserJsonix)();
const _ = require('lodash');

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

    'transferElectronicMortgageDepositary': {'request_file': 'Request4.xml', 'response_file': 'Response4.xml'},
    'noticeRedemption': {'request_file': 'Request0.xml', 'response_file': 'Response0.xml'},
    'noticeReleaseMortgage': {'request_file': 'Request3.xml', 'response_file': 'Response3.xml'},
//    'checkingInformationOwner': {'request_file': 'Request2.xml', 'response_file': 'Response2.xml'},
//    'directionAgreement': {'request_file': 'Request1.xml', 'response_file': 'Response1.xml'},
};


function testRequestResponse (BASE_ROOT, request_type, request_file, response_file) {

    let request = fs.readFileSync(BASE_ROOT + request_file, 'utf8');
    let request_parser = mortgageParserJsonix.parseRequest(request);
    assert.equal(request_parser.requestType, request_type,
        console.log('\nTest OK, this '+ request_type + ' request'));

    let model_response = fs.readFileSync(BASE_ROOT + response_file , 'utf8');
    let model_response_parser = mortgageParserJsonix.parseResponse(model_response);
    let response_parser = mortgageParserJsonix.parseResponse(request_parser.response.value);
    let diff = getObjectDiff(model_response_parser.value, response_parser.value);
    assert.equal(diff.length, 0,
        console.log('Test OK, this '+ request_type + ' response'));
}

console.log('Test request-response parser');

for (let request_type in testMap) {
    testRequestResponse (BASE_ROOT, request_type, testMap[request_type]['request_file'], testMap[request_type]['response_file']);

}