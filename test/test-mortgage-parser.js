const fs = require('fs');

const mortgageParser = new (require('./../index').MortgageParser)();

// ZipFile
let data = fs.readFileSync('./test/cases/mortgage_request.zip');
let res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/Mortgage_test1.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/Mortgage_test2.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/Agreement_test4.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// DataUrl
data = fs.readFileSync('./test/cases/mortgage_request.zip.dataUrl.txt', 'utf8');
res = mortgageParser.parseZip(data, '1');
console.log(res);