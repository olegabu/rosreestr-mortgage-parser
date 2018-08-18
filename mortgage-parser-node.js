MortgageParser = require('./mortgage-parser');

module.exports = class MortgageParserNode extends MortgageParser {

  constructor() {
    super();
    this.parser = new (require('xmldom').DOMParser)();
    this.xpath = require('xpath');
  }

  find(d, errors, path) {
    const res = this.xpath.useNamespaces(this.namespaceMap)(path, d, true);

    let content = res && res.textContent;

    if (!content) {
      errors.push('no content for ' + path);
    }

    return content;
  }
};
