const Jsonix = require('jsonix').Jsonix;
const Mortgage = require('./mappings/Mortgage').Mortgage;
const TRequest = require('./mappings/TRequest').TRequest;
const Request = require('./mappings/Request').Request;

module.exports = class MortgageParserJsonix {


  find(d, errors, path) {
  }

  parse(text) {
    const ret = {errors: []};

    const context = new Jsonix.Context([Mortgage]);

    const unmarshaller = context.createUnmarshaller();
    const u = unmarshaller.unmarshalString(text);

    ret.value = u.value;

    ret.regNumber = u.value.pledges.pledge[0].mortgage.regNumber;
    ret.storageOgrn = u.value.depositoryAccounting.custody.nativeForeignParams.nativeOrgParams.ogrn;
    ret.recordOgrn = u.value.depositoryAccounting.accountingDep.nativeForeignParams.nativeOrgParams.ogrn;
    ret.depositoryAccount = u.value.depositoryAccounting.accountNum;
    ret.deponentAccount = u.value.depositoryAccounting.depositorAccNum;

    return ret;
  }

  parseRequest(text) {
    const ret = {errors: []};

    const context = new Jsonix.Context([Request]);

    const unmarshaller = context.createUnmarshaller();
    const u = unmarshaller.unmarshalString(text);

    ret.value = u.value;

    ret.isCreate = typeof(u.value.operation.transferElectronicMortgage) !== 'undefined';
    ret.regNumber = u.value.operation.transferElectronicMortgage.noticeReleaseMortgage.mortgageNumber;
    ret.fileName = u.value.operation.transferElectronicMortgage.noticeReleaseMortgage.attachmentDescription.fileName;

    return ret;
  }

  parsePayloadRequest(text) {
    const ret = {errors: []};

    const context = new Jsonix.Context([TRequest]);

    const unmarshaller = context.createUnmarshaller();
    const u = unmarshaller.unmarshalString(text);

    ret.value = u.value;

    ret.fileName = u.value.mortgageFile.fileName;

    return ret;
  }

};
