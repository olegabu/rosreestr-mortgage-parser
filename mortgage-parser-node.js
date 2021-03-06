MortgageParserDom = require('./mortgage-parser-dom');

module.exports = class MortgageParserNode extends MortgageParserDom {

  constructor() {
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

    super(parser, find);
  }
};
