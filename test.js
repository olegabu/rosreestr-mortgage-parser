const MortgageParser = require('./index').MortgageParser;

const fs = require('fs');

const mortgageParser = new MortgageParser();

fs.readFile('Mortgage.xml', 'utf8', (err, text) => {
  console.log(text);
  console.log(mortgageParser.parse(text));
});

const ZipParser = require('./index').ZipParser;

const zipParser = new ZipParser();

fs.readFile('mortgage_request.zip', (err, data) => {
  console.log(zipParser.parse(data));
});

fs.readFile('mortgage_request.zip.dataUrl.txt', 'utf8', (err, text) => {
  console.log(zipParser.parseDataUrl(text));
});
