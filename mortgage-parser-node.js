MortgageParser = require('./mortgage-parser');

module.exports = class MortgageParserNode extends MortgageParser {

  constructor() {
    super();
    this.parser = new (require('xmldom').DOMParser)();
  }

  find(d, errors, path) {
    const xpath = require('xpath');
    const res = xpath.useNamespaces(this.namespaceMap)(path, d, true);

    let content = res && res.textContent;

    if (!content) {
      errors.push('no content for ' + path);
    }

    return content;
  }
};
