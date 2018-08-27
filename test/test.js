const fs = require('fs');

const mortgageParserJsonix = new (require('./../index').MortgageParserJsonix)();

let text = fs.readFileSync('./test/cases/Mortgage.xml', 'utf8');

let ret = mortgageParserJsonix.parse(text);

console.log(JSON.stringify(ret));
console.log(ret);

const mortgageParserNode = new (require('./../index').MortgageParserNode)();

ret = mortgageParserNode.parse(text);

console.log(JSON.stringify(ret));
console.log(ret);

text = fs.readFileSync('request.xml', 'utf8');

ret = mortgageParserJsonix.parseRequest(text);

console.log(JSON.stringify(ret));
console.log(ret);

const zipParser = new (require('./../index').ZipParser)();

let data = fs.readFileSync('./test/cases/mortgage_request.zip');
console.log(zipParser.parse(data));

text = fs.readFileSync('./test/cases/mortgage_request.zip.dataUrl.txt', 'utf8');
console.log(zipParser.parseDataUrl(text));

console.log(mortgageParserJsonix.getNoticeRedemptionResponse(true, '23:43:0414009:5822', '30:12:020292:2742-30/001/2018-150', 'Принят'));
console.log(mortgageParserJsonix.getChangeNotificationResponse(true, '2018-05-28', '23:43:0414009:5822', '30:12:020292:2742-30/001/2018-150', 'Принят'));
console.log(mortgageParserJsonix.getNoticeReceiptMortgageResponse(true, '2018-05-28', '23:43:0414009:5822', 'Принят'));
console.log(mortgageParserJsonix.getObtainingStatusNoticeReleaseMortgageResponse(true, '2018-05-28', '23:43:0414009:5822', '30:12:020292:2742-30/001/2018-150', 'Принят'));

