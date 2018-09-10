const Jsonix = require('jsonix').Jsonix;
const Mortgage = require('./mappings/Mortgage').Mortgage;
const TRequest = require('./mappings/TRequest').TRequest;
const Request = require('./mappings/Request').Request;

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
            let _ = require('lodash');
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

    parseResponse(text) {
        const ret = {errors: []};

        try {
            let _ = require('lodash');
            const context = new Jsonix.Context([Request]);

            const unmarshaller = context.createUnmarshaller();
            const u = unmarshaller.unmarshalString(text);

            ret.value = u.value;
            return ret

        }
        catch (e) {
            return ret.errors.push(e);
        }
    };

    generateResponse(request_type, response_args) {
        const ret = {errors: []};
        try {
            const model_params = responseMap[request_type];
            ret.response = this[model_params.response_function](response_args);
            return ret;
        }
        catch (e) {
            return ret.errors.push(e);
        }
    };

    getMarshaller() {
        const context = new Jsonix.Context([Request], {
            namespacePrefixes: {
                'urn://x-artefacts-rosreestr-gov-ru/virtual-services/electronic-mortgage/1.0.0': 'req',
                'http://rosreestr.ru/services/v0.1/commonsMortgage/Subjects': 'subj',
                'http://rosreestr.ru/services/v0.1/commonsMortgage/Documents': 'docs'
            }
        });

        return context.createMarshaller();
    }

    getNoticeRedemptionResponse(request_args) {
        const ret = {errors: []};

        try {
            const response = {
                'req:Response': {
                    cadastralNumbers: {
                        cadastralNumber: request_args['cadastralNumber']
                    },
                    operation: {
                        noticeRedemption: {
                            status: request_args['status'],
                            comment: request_args['comment'],
                            mortgageNumber: request_args['mortgageNumber']
                        }
                    }
                }
            };

            ret.value = '<?xml version="1.0" encoding="UTF-8"?>' + this.getMarshaller().marshalString(response);
        } catch (e) {
            return ret.errors.push(e);
        }

        return ret;
    }

    getChangeNotificationResponse(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                'req:Response': {
                    cadastralNumbers: {
                        cadastralNumber: response_args['cadastralNumber']
                    },
                    operation: {
                        transferAgreement: {
                            changeNotification: {
                                status: response_args['status'],
                                comment: response_args['comment'],
                                mortgageNumber: response_args['mortgageNumber'],
                                dateReceiptAgreement: response_args['dateReceiptAgreement']
                            }
                        }
                    }
                }
            };

            ret.value = '<?xml version="1.0" encoding="UTF-8"?>' + this.getMarshaller().marshalString(response);
        } catch (e) {
            return ret.errors.push(e);
        }

        return ret;
    }

    getNoticeReceiptMortgageResponse(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                'req:Response': {
                    cadastralNumbers: {
                        cadastralNumber: response_args['cadastralNumber']
                    },
                    operation: {
                        transferElectronicMortgage: {
                            noticeReceiptMortgage: {
                                status: response_args['status'],
                                comment: response_args['comment'],
                                dateDepository: response_args['dateDepository']
                            }
                        }
                    }
                }
            };

            ret.value = '<?xml version="1.0" encoding="UTF-8"?>' + this.getMarshaller().marshalString(response);
        } catch (e) {
            return ret.errors.push(e);
        }

        return ret;
    }

    getNoticeReleaseMortgageResponse(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                'req:Response': {
                    cadastralNumbers: {
                        cadastralNumber: response_args['cadastralNumber']
                    },
                    operation: {
                        transferElectronicMortgage: {
                            obtainingStatusNoticeReleaseMortgage: {
                                status: response_args['status'],
                                comment: response_args['comment'],
                                dateDepository: response_args['dateDepository'],
                                mortgageNumber: response_args['mortgageNumber']
                            }
                        }
                    }
                }
            };

            ret.value = '<?xml version="1.0" encoding="UTF-8"?>' + this.getMarshaller().marshalString(response);
        } catch (e) {
            return ret.errors.push(e);
        }

        return ret;
    }

    getNoticeCheckingInformationOwner(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                'req:Response': {
                    cadastralNumber: {
                        cadastralNumbers: response_args['cadastralNumber']
                    },
                    operation: {
                        transferAgreement: {
                            noticeOwner: {
                                status: response_args['status'],
                                comment: response_args['comment'],
                                mortgageNumber: response_args['mortgageNumber'],
                                firstOwners: {
                                    firstOwner: [{
                                        id: '1',
                                        person: {
                                            otherInfo: {
                                                email: response_args['email']
                                            },
                                            surname: response_args['surname'],
                                            firstname: response_args['firstname'],
                                            birthDate: response_args['birthDate'],
                                            birthPlace: response_args['birthPlace'],
                                            idDocument: {
                                                id: "Паспорт гражданина РФ",
                                                documentTypes:
                                                    [{documentTypeCode: response_args['documentTypeCode']}],
                                                number: response_args['passport_number'],
                                                series: response_args['passport_series']
                                            }
                                        },
                                        firstOwnerKind: response_args['firstOwnerKind']
                                    }]

                                }
                            }
                        }
                    }
                }
            };

            ret.value = '<?xml version="1.0" encoding="UTF-8"?>' + this.getMarshaller().marshalString(response);
        }
        catch
            (e) {
            return ret.errors.push(e);
        }

        return ret;
    }

};
