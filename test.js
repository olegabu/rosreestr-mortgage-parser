const fs = require('fs');

fs.readFile('Mortgage.xml', 'utf8', (err, text) => {
  const mortgageParserJsonix = new (require('./index').MortgageParserJsonix)();

  let ret = mortgageParserJsonix.parse(text);

  console.log(JSON.stringify(ret));
  console.log(ret);

  const mortgageParserNode = new (require('./index').MortgageParserNode)();

  ret = mortgageParserNode.parse(text);

  console.log(JSON.stringify(ret));
  console.log(ret);
});

fs.readFile('request.xml', 'utf8', (err, text) => {
  const mortgageParserJsonix = new (require('./index').MortgageParserJsonix)();

  let ret = mortgageParserJsonix.parseRequest(text);

  console.log(JSON.stringify(ret));
  console.log(ret);
});

const ZipParser = require('./index').ZipParser;

const zipParser = new ZipParser();

fs.readFile('mortgage_request.zip', (err, data) => {
  console.log(zipParser.parse(data));
});

fs.readFile('mortgage_request.zip.dataUrl.txt', 'utf8', (err, text) => {
  console.log(zipParser.parseDataUrl(text));
});

