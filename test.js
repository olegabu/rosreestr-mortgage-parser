const MortgageParser = require('./mortgage-parser');

const parser = new (require('xmldom').DOMParser)();

const find = function (d, errors, path) {
  const xpath = require('xpath');
  const res = xpath.useNamespaces(this.namespaceMap)(path, d, true);

  let content = res && res.textContent;

  if (!content) {
    errors.push('no content for ' + path);
  }

  return content;
};

const mortgageParser = new MortgageParser(parser, find);

require("fs").readFile("Mortgage.xml", "utf8", (err, text) => {
  console.log(text);
  console.log(mortgageParser.parse(text));
});
