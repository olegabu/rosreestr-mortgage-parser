const MortgageParser = require('./mortgage-parser-node');

const parser = new MortgageParser();

require("fs").readFile("Mortgage.xml", "utf8", (err, text) => {
  console.log(text);
  console.log(parser.parse(text));
});
