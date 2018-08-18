import MortgageParser from './mortgage-parser'

module.exports = class MortgageParserBrowser extends MortgageParser {

  constructor() {
    super();
    this.parser = new DOMParser();
  }

  find(d, errors, path) {
    const namespaceMap = this.namespaceMap;

    const res = d.evaluate(path, d, function(ns) {return namespaceMap[ns];}).iterateNext();

    let content = res && res.textContent;

    if(!content) {
      errors.push('no content for ' + path);
    }

    return content;
  }

};
