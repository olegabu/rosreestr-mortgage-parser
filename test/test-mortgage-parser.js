const fs = require('fs');

const mortgageParser = new (require('./../index').MortgageParser)();

// ZipFile
let data = fs.readFileSync('./test/cases/mortgage_request.zip');
let res = mortgageParser.parseZip(data, '0');
console.log(res);

// DataUrl
data = fs.readFileSync('./test/cases/mortgage_request.zip.dataUrl.txt', 'utf8');
res = mortgageParser.parseZip(data, '1');
console.log(res);