
module.exports = class MortgageParserDom {

  constructor(parser, findFunction) {
    this.namespaceMap = {
      payloadReq: 'http://rosreestr.ru/services/v0.1/commonsMortgage/TRequest',
      req: "urn://x-artefacts-rosreestr-gov-ru/virtual-services/electronic-mortgage/1.0.0",
      ns5: "http://rosreestr.ru/services/v0.1/commonsMortgage/Commons",
      ns6: "http://rosreestr.ru/services/v0.1/commonsMortgage/electronicMortgage",
      ns8: "http://rosreestr.ru/services/v0.1/commonsMortgage/TRequest",
      ns7: "http://rosreestr.ru/services/v0.1/commonsMortgage/TObject",
      ns2: "http://rosreestr.ru/services/v0.1/commonsMortgage/Subjects",
      ns4: "http://rosreestr.ru/services/v0.1/commonsMortgage/Documents",
      ns3: "http://rosreestr.ru/services/v0.1/commonsMortgage/Address"
    };

    this.parser = parser;
    this.find = findFunction;
  }

  find(d, errors, path) {
  }

  parse(text) {
    const ret = {errors: []};

    const d = this.parser.parseFromString(text, 'text/xml');

    ret.regNumber = this.find(d, ret.errors, 'ns6:electronicMortgage/ns6:pledges/ns6:pledge/ns6:mortgage/ns6:regNumber');
    ret.storageOgrn = this.find(d, ret.errors, 'ns6:electronicMortgage/ns6:depositoryAccounting/ns6:custody/ns2:nativeForeignParams/ns2:nativeOrgParams/ns2:ogrn');
    ret.recordOgrn = this.find(d, ret.errors, 'ns6:electronicMortgage/ns6:depositoryAccounting/ns6:accountingDep/ns2:nativeForeignParams/ns2:nativeOrgParams/ns2:ogrn');

    const numberDepository = this.find(d, ret.errors, 'ns6:electronicMortgage/ns6:depositoryAccounting/ns6:accountNum/ns6:number');
    const sectionDepository = this.find(d, ret.errors, 'ns6:electronicMortgage/ns6:depositoryAccounting/ns6:accountNum/ns6:section');

    if(numberDepository && sectionDepository) {
      ret.depositoryAccount = {number: numberDepository, section: sectionDepository};
    }

    const numberDeponent = this.find(d, ret.errors, 'ns6:electronicMortgage/ns6:depositoryAccounting/ns6:depositorAccNum/ns6:number');
    const sectionDeponent = this.find(d, ret.errors, 'ns6:electronicMortgage/ns6:depositoryAccounting/ns6:depositorAccNum/ns6:section');

    if(numberDeponent && sectionDeponent) {
      ret.deponentAccount = {number: numberDeponent, section: sectionDeponent};
    }

    return ret;
  }

  parseRequest(text) {
    const ret = {errors: []};

    const d = this.parser.parseFromString(text, 'text/xml');

    const informationAddedEGRN = this.find(d, ret.errors, 'req:Request/req:Operation/req:TransferElectronicMortgage/req:NoticeReleaseMortgage/req:InformationAddedEGRN');

    //TODO find a better way to determine it's an initial upload of mortgage
    ret.isCreate = typeof(informationAddedEGRN) !== 'undefined';

    //ret.regNumber = this.find(d, ret.errors, 'req:Request/req:Operation/req:TransferElectronicMortgage/req:NoticeReleaseMortgage/req:MortgageNumber');
    ret.regNumber = this.find(d, ret.errors, '//req:MortgageNumber');

    ret.fileName = this.find(d, ret.errors, '//req:FileName');

    return ret;
  }

  parsePayloadRequest(text) {
    const ret = {errors: []};

    const d = this.parser.parseFromString(text, 'text/xml');

    ret.fileName = this.find(d, ret.errors, '//payloadReq:fileName');

    return ret;
  }

  validate(o, accountList, depositoryList) {
    const ret = {errors: []};

    ret.depositoryAccount = accountList.find(a => {
      const accountFound = a.id === o.depositoryAccount.id
        //&& a.section === o.value.depositoryAccount.section
        //TODO verify type
        && a.value.accountType === 'L34';

      let sectionFound;
      if(accountFound && a.value.sections) {
        sectionFound = a.value.sections.find(s => {
          return o.depositoryAccount.section === s.id;
        });
      }

      return accountFound && sectionFound;
    });

    if(!ret.depositoryAccount) {
      ret.errors.push('cannot find account' + ` ${o.depositoryAccount.id} ${o.depositoryAccount.section} L34`);
    }

    ret.deponentAccount = accountList.find(a => {
      const accountFound = a.id === o.deponentAccount.id
        //&& a.section === o.value.deponentAccount.section
        //TODO verify type
        && a.value.accountType === 'A10';

      let sectionFound;
      if(accountFound && a.value.sections) {
        sectionFound = a.value.sections.find(s => {
          return o.deponentAccount.section === s.id;
        });
      }

      return accountFound && sectionFound;
    });

    if(!ret.deponentAccount) {
      ret.errors.push('cannot find account' + ` ${o.deponentAccount.id} ${o.deponentAccount.section} A10`);
    }

    ret.storageDepository = depositoryList.find(d => {
      return d.value.ogrn === o.storageOgrn;
    });

    if(!ret.storageDepository) {
      ret.errors.push('cannot find depository' + ` ${o.storageOgrn}`);
    }

    ret.recordDepository = depositoryList.find(d => {
      return d.value.ogrn === o.recordOgrn;
    });

    if(!ret.recordDepository) {
      ret.errors.push('cannot find depository' + ` ${o.recordOgrn}`);
    }

    return ret;
  }

};
