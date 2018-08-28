stuffValidator = require('./stuff-validator');

module.exports = class MortgageParser {
    constructor(data) {
        this.stuffValidator = new stuffValidator.validate(data);


    };

    init(data) {
      const res = {};

      return res
    };
};
