const fs = require('fs');
const assert = require('assert');
const mortgageParserJsonix = new (require('./../index').MortgageParserJsonix)();

console.log('Test request parser');

let text = fs.readFileSync('./test/resources/Request0.xml', 'utf8');
let ret = mortgageParserJsonix.parseRequest(text);
assert.equal(ret.requestType, 'noticeRedemption',
    console.log('Test OK, this noticeRedemption request'));

text = fs.readFileSync('./test/resources/Request1.xml', 'utf8');
ret = mortgageParserJsonix.parseRequest(text);
assert.equal(ret.requestType, 'directionAgreement',
    console.log('Test OK, this directionAgreement request'));

text = fs.readFileSync('./test/resources/Request2.xml', 'utf8');
ret = mortgageParserJsonix.parseRequest(text);
assert.equal(ret.requestType, 'checkingInformationOwner',
    console.log('Test OK, this checkingInformationOwner request'));

text = fs.readFileSync('./test/resources/Request3.xml', 'utf8');
ret = mortgageParserJsonix.parseRequest(text);
assert.equal(ret.requestType, 'noticeReleaseMortgage',
    console.log('Test OK, this noticeReleaseMortgage request'));

text = fs.readFileSync('./test/resources/Request4.xml', 'utf8');
ret = mortgageParserJsonix.parseRequest(text);
assert.equal(ret.requestType, 'transferElectronicMortgageDepositary',
    console.log('Test OK, this transferElectronicMortgageDepositary request'));