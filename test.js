const MortgageParser = require('./index');

const fs = require("fs");

const mortgageParser = new MortgageParser();

fs.readFile("Mortgage.xml", "utf8", (err, text) => {
  console.log(text);
  console.log(mortgageParser.parse(text));
});
