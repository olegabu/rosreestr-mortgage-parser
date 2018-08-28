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
            let _ = require('lodash');
            const context = new Jsonix.Context([Request]);

            const unmarshaller = context.createUnmarshaller();
            const u = unmarshaller.unmarshalString(text);

            ret.value = u.value;

            let root = '';

            switch (true) {
                case _.hasIn(u, 'value.operation.transferElectronicMortgage.transferElectronicMortgageDepositary'):
                    root = u.value.operation.transferElectronicMortgage.transferElectronicMortgageDepositary;
                    ret.requestType = 'transferElectronicMortgageDepositary';
                    ret.fileAttach = root.attachmentDescription.fileName;
                    break;

                case _.hasIn(u, 'value.operation.transferElectronicMortgage.noticeReleaseMortgage'):
                    root = u.value.operation.transferElectronicMortgage.noticeReleaseMortgage;
                    ret.requestType = 'noticeReleaseMortgage';
                    ret.mortgageNumber = root.mortgageNumber;
                    ret.fileAttach = root.attachmentDescription.fileName;
                    break;

                case _.hasIn(u, 'value.operation.transferAgreement.checkingInformationOwner'):
                    root = u.value.operation.transferAgreement.checkingInformationOwner;
                    ret.requestType = 'checkingInformationOwner';
                    ret.mortgageNumber = root.mortgageNumber;
                    break;

                case _.hasIn(u, 'value.operation.transferAgreement.directionAgreement'):
                    root = u.value.operation.transferAgreement.directionAgreement;
                    ret.requestType = 'directionAgreement';
                    ret.mortgageNumber = root.mortgageNumber;
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

            ret.cadastralNumber = u.value.cadastralNumbers.cadastralNumber


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
