const Jsonix = require('jsonix').Jsonix;
const Mortgage = require('./mappings/Mortgage').Mortgage;
const TRequest = require('./mappings/TRequest').TRequest;
const Request = require('./mappings/Request').Request;
const _ = require('lodash');

module.exports = class MortgageParserJsonix {

    parseMortgage(text) {
        const ret = {errors: []};

        try {
            const context = new Jsonix.Context([Mortgage]);

            const unmarshaller = context.createUnmarshaller();
            const u = unmarshaller.unmarshalString(text);

            ret.value = u.value;

            if (u.name.localPart === 'agreementAmendments') {
                return ret;
            }
            else { // if electronicMortgage
                ret.regNumber = u.value.pledges.pledge[0].mortgage.regNumber;
                ret.storageOgrn = u.value.depositoryAccounting.custody.nativeForeignParams.nativeOrgParams.ogrn;
                ret.recordOgrn = u.value.depositoryAccounting.accountingDep.nativeForeignParams.nativeOrgParams.ogrn;
                ret.depositoryAccount = u.value.depositoryAccounting.accountNum;
                ret.deponentAccount = u.value.depositoryAccounting.depositorAccNum;
                ret.cadastralNumber = u.value.pledges.pledge[0].objectDescription.object.cadastralNumber;
                return ret;
            }

        } catch (e) {
            return ret.errors.push(e);
        }
    }

    parseRequest(text) {
        const ret = {errors: []};

        try {
            const context = new Jsonix.Context([Request]);

            const unmarshaller = context.createUnmarshaller();
            const u = unmarshaller.unmarshalString(text);

            ret.value = u.value;

            let root = '';
            ret.cadastralNumber = u.value.cadastralNumbers.cadastralNumber;


            switch (true) {
                case _.hasIn(u, 'value.operation.transferElectronicMortgage.transferElectronicMortgageDepositary'):
                    root = u.value.operation.transferElectronicMortgage.transferElectronicMortgageDepositary;
                    ret.requestType = 'transferElectronicMortgageDepositary';
                    ret.fileName = root.attachmentDescription.fileName;
                    break;

                case _.hasIn(u, 'value.operation.transferElectronicMortgage.noticeReleaseMortgage'):
                    root = u.value.operation.transferElectronicMortgage.noticeReleaseMortgage;
                    ret.requestType = 'noticeReleaseMortgage';
                    ret.mortgageNumber = root.mortgageNumber;
                    ret.fileName = root.attachmentDescription.fileName;
                    break;

                case _.hasIn(u, 'value.operation.transferAgreement.checkingInformationOwner'):
                    root = u.value.operation.transferAgreement.checkingInformationOwner;
                    ret.requestType = 'checkingInformationOwner';
                    break;

                case _.hasIn(u, 'value.operation.transferAgreement.directionAgreement'):
                    root = u.value.operation.transferAgreement.directionAgreement;
                    ret.requestType = 'directionAgreement';
                    ret.mortgageNumber = root.mortgageNumber;
                    ret.fileName = root.attachmentDescription.fileName;
                    break;

                case _.hasIn(u, 'value.operation.noticeRedemption'):
                    root = u.value.operation.noticeRedemption;
                    ret.requestType = 'noticeRedemption';
                    ret.mortgageNumber = root.mortgageNumber;
                    break;

                default:
                    ret.requestType = 'undefined';
                    ret.errors.push('Unknown request type.');
            }


        } catch (e) {
            return ret.errors.push(e);
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
            return ret.errors.push(e);
        }

        return ret;
    }

};
