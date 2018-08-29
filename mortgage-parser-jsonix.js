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
            ret.cadastralNumber = u.value.cadastralNumbers.cadastralNumber;

            let response_args;


            switch (true) {
                case _.hasIn(u, 'value.operation.transferElectronicMortgage.transferElectronicMortgageDepositary'):
                    root = u.value.operation.transferElectronicMortgage.transferElectronicMortgageDepositary;
                    ret.requestType = 'transferElectronicMortgageDepositary';
                    ret.fileName = root.attachmentDescription.fileName;

                    response_args = responseMap[ret.requestType];
                    // TODO Get correct data from chaincode
                    response_args['cadastralNumber'] = ret.cadastralNumber;
                    response_args['status'] = true;
                    response_args['dateDepository'] = '2018-05-28';
                    response_args['comment'] = 'Принят';
                    ret.response = this.getNoticeReceiptMortgageResponse(response_args);
                    break;

                case _.hasIn(u, 'value.operation.transferElectronicMortgage.noticeReleaseMortgage'):
                    root = u.value.operation.transferElectronicMortgage.noticeReleaseMortgage;
                    ret.requestType = 'noticeReleaseMortgage';
                    ret.mortgageNumber = root.mortgageNumber;
                    ret.fileName = root.attachmentDescription.fileName;
                    response_args = responseMap[ret.requestType];
                    // TODO Get correct data from chaincode
                    response_args['cadastralNumber'] = ret.cadastralNumber;
                    response_args['status'] = true;
                    response_args['dateDepository'] = '2018-05-28';
                    response_args['comment'] = 'Принят';
                    response_args['mortgageNumber'] = ret.mortgageNumber;
                    ret.response = this.getNoticeReleaseMortgageResponse(response_args);
                    break;

                case _.hasIn(u, 'value.operation.transferAgreement.checkingInformationOwner'):
                    root = u.value.operation.transferAgreement.checkingInformationOwner;
                    ret.requestType = 'checkingInformationOwner';
                    response_args = responseMap[ret.requestType];
                    // TODO Get correct data from chaincode
                    response_args['cadastralNumber'] = ret.cadastralNumber;
                    response_args['status'] = true;
                    response_args['dateDepository'] = '2018-05-28';
                    response_args['comment'] = 'Принят';
                    response_args['mortgageNumber'] = ret.mortgageNumber;
                    response_args['email'] = 'test@test.ru';
                    response_args['surname'] = 'test';
                    response_args['firstname'] = 'test';
                    response_args['birthDate'] = '10-10-1998';
                    response_args['birthPlace'] = 'Moscow';
                    response_args['documentTypeCode'] = '008001001000';
                    response_args['passport_number'] = '50000';
                    response_args['passport_series'] = '4000';
                    response_args['firstOwnerKind'] = '359000000100';
                    ret.response = this.getNoticeCheckingInformationOwner(response_args);
                    break;

                case _.hasIn(u, 'value.operation.transferAgreement.directionAgreement'):
                    root = u.value.operation.transferAgreement.directionAgreement;
                    ret.requestType = 'directionAgreement';
                    ret.mortgageNumber = root.mortgageNumber;
                    response_args = responseMap[ret.requestType];
                    // TODO Get correct data from chaincode
                    response_args['cadastralNumber'] = ret.cadastralNumber;
                    response_args['status'] = true;
                    response_args['dateReceiptAgreement'] = '2018-05-28';
                    response_args['comment'] = 'Принят';
                    response_args['mortgageNumber'] = ret.mortgageNumber;
                    ret.response = this.getChangeNotificationResponse(response_args);
                    break;

                case _.hasIn(u, 'value.operation.noticeRedemption'):
                    root = u.value.operation.noticeRedemption;
                    ret.requestType = 'noticeRedemption';
                    ret.mortgageNumber = root.mortgageNumber;
                    response_args = responseMap[ret.requestType];
                    // TODO Get correct data from chaincode
                    response_args['cadastralNumber'] = ret.cadastralNumber;
                    response_args['status'] = true;
                    response_args['comment'] = 'Принят';
                    response_args['mortgageNumber'] = ret.mortgageNumber;
                    ret.response = this.getNoticeRedemptionResponse(response_args);
                    break;

                default:
                    ret.requestType = 'undefined';
                    ret.errors.push('Unknown request type.');
            }


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
            ret.errors.push(e);
        }
    };

    getMarshaller() {
        const context = new Jsonix.Context([Request], {
            namespacePrefixes: {
                'urn://x-artefacts-rosreestr-gov-ru/virtual-services/electronic-mortgage/1.0.0': ''
            }
        });

        return context.createMarshaller();
    }

    getNoticeRedemptionResponse(request_args) {
        const ret = {errors: []};

        try {
            const response = {
                Response: {
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

            ret.value = this.getMarshaller().marshalString(response);
        } catch (e) {
            ret.errors.push(e);
        }

        return ret;
    }

    getChangeNotificationResponse(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                Response: {
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

            ret.value = this.getMarshaller().marshalString(response);
        } catch (e) {
            ret.errors.push(e);
        }

        return ret;
    }

    getNoticeReceiptMortgageResponse(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                Response: {
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

            ret.value = this.getMarshaller().marshalString(response);
        } catch (e) {
            ret.errors.push(e);
        }

        return ret;
    }

    getNoticeReleaseMortgageResponse(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                Response: {
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

            ret.value = this.getMarshaller().marshalString(response);
        } catch (e) {
            ret.errors.push(e);
        }

        return ret;
    }

    getNoticeCheckingInformationOwner(response_args) {
        const ret = {errors: []};

        try {
            const response = {
                Response: {
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
                                    firstOwner: {
                                        person: {
                                            otherInfo: {
                                                email: response_args['email']
                                            },
                                            surname: response_args['surname'],
                                            firstname: response_args['firstname'],
                                            birthDate: response_args['birthDate'],
                                            birthPlace: response_args['birthPlace'],
                                            idDocument: {
                                                documentTypes: {
                                                    documentTypeCode: response_args['documentTypeCode']
                                                },
                                                number: response_args['passport_number'],
                                                series: response_args['passport_series']
                                            }
                                        },
                                        firstOwnerKind: response_args['firstOwnerKind']
                                    }
                                }
                            }
                        }
                    }
                }
            };

            ret.value = this.getMarshaller().marshalString(response);
        }
        catch
            (e) {
            ret.errors.push(e);
        }

        return ret;
    }

};