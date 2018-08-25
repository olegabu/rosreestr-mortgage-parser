const Jsonix = require('jsonix').Jsonix;
const Mortgage = require('./mappings/Mortgage').Mortgage;
const TRequest = require('./mappings/TRequest').TRequest;
const Request = require('./mappings/Request').Request;

module.exports = class MortgageParserJsonix {

  parse(text) {
    const ret = {errors: []};

    try {
      const context = new Jsonix.Context([Mortgage]);

      const unmarshaller = context.createUnmarshaller();
      const u = unmarshaller.unmarshalString(text);

      ret.value = u.value;

      ret.regNumber = u.value.pledges.pledge[0].mortgage.regNumber;
      ret.storageOgrn = u.value.depositoryAccounting.custody.nativeForeignParams.nativeOrgParams.ogrn;
      ret.recordOgrn = u.value.depositoryAccounting.accountingDep.nativeForeignParams.nativeOrgParams.ogrn;
      ret.depositoryAccount = u.value.depositoryAccounting.accountNum;
      ret.deponentAccount = u.value.depositoryAccounting.depositorAccNum;
    } catch (e) {
      ret.errors.push(e);
    }

    return ret;
  }

  parseRequest(text) {
    const ret = {errors: []};

    try {
      const context = new Jsonix.Context([Request]);

      const unmarshaller = context.createUnmarshaller();
      const u = unmarshaller.unmarshalString(text);

      ret.value = u.value;

      ret.isCreate = typeof(u.value.operation.transferElectronicMortgage) !== 'undefined';
      ret.regNumber = u.value.operation.transferElectronicMortgage.noticeReleaseMortgage.mortgageNumber;
      ret.fileName = u.value.operation.transferElectronicMortgage.noticeReleaseMortgage.attachmentDescription.fileName;
    } catch (e) {
      ret.errors.push(e);
    }

    return ret;
  }

  parsePayloadRequest(text) {
    const ret = {errors: []};

    try {
      const context = new Jsonix.Context([TRequest]);

      const unmarshaller = context.createUnmarshaller();
      const u = unmarshaller.unmarshalString(text);

      ret.value = u.value;

      ret.fileName = u.value.mortgageFile.fileName;
    } catch (e) {
      ret.errors.push(e);
    }

    return ret;
  }

  getMarshaller() {
    const context = new Jsonix.Context([Request], {
      namespacePrefixes: {
        'urn://x-artefacts-rosreestr-gov-ru/virtual-services/electronic-mortgage/1.0.0': ''
      }
    });

    return context.createMarshaller();
  }

  getNoticeRedemptionResponse(status, cadastralNumber, mortgageNumber, comment) {
    const ret = {errors: []};

    try {
      const response = {
        Response: {
          cadastralNumbers: {
            cadastralNumber: [cadastralNumber]
          },
          operation: {
            noticeRedemption: {
              status: status,
              comment: comment,
              mortgageNumber: mortgageNumber
            }
          }
        }
      };

      ret.value = this.getMarshaller().marshalString(response);
    } catch (e) {
      ret.errors.push(e);
    }

    return ret;
  }

  getChangeNotificationResponse(status, dateReceiptAgreement, cadastralNumber, mortgageNumber, comment) {
    const ret = {errors: []};

    try {
      const response = {
        Response: {
          cadastralNumbers: {
            cadastralNumber: [cadastralNumber]
          },
          operation: {
            transferAgreement: {
              changeNotification: {
                status: status,
                comment: comment,
                mortgageNumber: mortgageNumber,
                dateReceiptAgreement: dateReceiptAgreement
              }
            }
          }
        }
      };

      ret.value = this.getMarshaller().marshalString(response);
    } catch (e) {
      ret.errors.push(e);
    }

    return ret;
  }

  getNoticeReceiptMortgageResponse(status, dateDepository, cadastralNumber, comment) {
    const ret = {errors: []};

    try {
      const response = {
        Response: {
          cadastralNumbers: {
            cadastralNumber: [cadastralNumber]
          },
          operation: {
            transferElectronicMortgage: {
              noticeReceiptMortgage: {
                status: status,
                comment: comment,
                dateDepository: dateDepository
              }
            }
          }
        }
      };

      ret.value = this.getMarshaller().marshalString(response);
    } catch (e) {
      ret.errors.push(e);
    }

    return ret;
  }

  getObtainingStatusNoticeReleaseMortgageResponse(status, dateDepository, cadastralNumber, mortgageNumber, comment) {
    const ret = {errors: []};

    try {
      const response = {
        Response: {
          cadastralNumbers: {
            cadastralNumber: [cadastralNumber]
          },
          operation: {
            transferElectronicMortgage: {
              obtainingStatusNoticeReleaseMortgage: {
                status: status,
                comment: comment,
                dateDepository: dateDepository,
                mortgageNumber: mortgageNumber
              }
            }
          }
        }
      };

      ret.value = this.getMarshaller().marshalString(response);
    } catch (e) {
      ret.errors.push(e);
    }

    return ret;
  }

}
;
