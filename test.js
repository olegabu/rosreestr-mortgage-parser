const MortgageParser = require('./index');

const mortgageParser = new MortgageParser();

require("fs").readFile("Mortgage.xml", "utf8", (err, text) => {
  console.log(text);
  console.log(mortgageParser.parse(text));
});
