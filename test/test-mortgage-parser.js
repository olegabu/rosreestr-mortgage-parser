const fs = require('fs');

const mortgageParser = new (require('./../index').MortgageParser)();

// ZipFile
const data = fs.readFileSync('./test/cases/mortgage_request.zip');
const res = mortgageParser.parseZip(data, '0');
console.log(res);

// DataUrl