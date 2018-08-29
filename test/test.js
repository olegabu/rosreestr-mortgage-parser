const fs = require('fs');

const mortgageParserJsonix = new (require('./../index').MortgageParserJsonix)();

let text = fs.readFileSync('./test/cases/Mortgage.xml', 'utf8');

let ret = mortgageParserJsonix.parseMortgage(text);

console.log(JSON.stringify(ret));
console.log(ret);

const mortgageParserNode = new (require('./../index').MortgageParserNode)();

ret = mortgageParserNode.parse(text);

console.log(JSON.stringify(ret));
console.log(ret);

text = fs.readFileSync('./test/request.xml', 'utf8');

ret = mortgageParserJsonix.parseRequest(text);

console.log(JSON.stringify(ret));
console.log(ret);

const zipParser = new (require('./../index').ZipParser)();

let data = fs.readFileSync('./test/cases/mortgage_request.zip');
console.log(zipParser.parseZip(data));

text = fs.readFileSync('./test/cases/mortgage_request.zip.dataUrl.txt', 'utf8');
console.log(zipParser.parseDataUrl(text));

