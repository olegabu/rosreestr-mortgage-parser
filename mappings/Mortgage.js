var Mortgage_Module_Factory = function () {
  var Mortgage = {
    name: 'Mortgage',
    defaultElementNamespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/electronicMortgage',
    typeInfos: [{
        localName: 'TRepresentativeDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TRepresentativeDocument'
        },
        baseTypeInfo: '.TSomeDocument'
      }, {
        localName: 'TValuerMGPerson',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TValuerMGPerson'
        },
        baseTypeInfo: '.TValuerPerson',
        propertyInfos: [{
            name: 'valuerOrganization',
            required: true,
            elementName: {
              localPart: 'valuerOrganization',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TObligation',
        baseTypeInfo: '.TBaseObligation'
      }, {
        localName: 'TObjectOldCadastralNumberPurposeNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectOldCadastralNumberPurposeNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TOrganization',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TOrganization'
        },
        baseTypeInfo: '.TSubject',
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'nativeForeignParams',
            required: true,
            elementName: {
              localPart: 'nativeForeignParams',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TNativeForeignParams'
          }, {
            name: 'address',
            required: true,
            elementName: {
              localPart: 'address',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TAddress'
          }]
      }, {
        localName: 'TLastPaymentAmount',
        propertyInfos: [{
            name: 'lastPaymentAmount',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TFirstOwner',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TFirstOwner'
        },
        propertyInfos: [{
            name: 'firstOwner',
            required: true,
            collection: true,
            elementName: {
              localPart: 'firstOwner',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TMgSubjectFirstOwner'
          }]
      }, {
        localName: 'TByPeriod',
        propertyInfos: [{
            name: 'interval',
            required: true,
            typeInfo: '.TInterval'
          }, {
            name: 'fixedDate',
            required: true,
            typeInfo: '.TFixedDate'
          }]
      }, {
        localName: 'TPrincipalAmountOfDebtRepayment',
        propertyInfos: [{
            name: 'repaymentDebtKind',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TInterdepDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TInterdepDocument'
        },
        baseTypeInfo: '.TLegalAct',
        propertyInfos: [{
            name: 'accountNumber',
            elementName: {
              localPart: 'accountNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TLeaseDescription',
        propertyInfos: [{
            name: 'object',
            required: true,
            typeInfo: '.TObject'
          }, {
            name: 'legalActLeave',
            required: true,
            typeInfo: '.TLegalActLeave'
          }, {
            name: 'regRight',
            typeInfo: '.TRegRight'
          }, {
            name: 'terms',
            required: true
          }]
      }, {
        localName: 'TInterestNoOneRepayment',
        propertyInfos: [{
            name: 'interestNoOneRepayment',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'IdPayersType',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'idPayersType'
        },
        propertyInfos: [{
            name: 'idPayer',
            required: true,
            collection: true,
            elementName: {
              localPart: 'idPayer',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TQuantity',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TQuantity'
        },
        propertyInfos: [{
            name: 'pageCount',
            required: true,
            elementName: {
              localPart: 'pageCount',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Integer'
          }, {
            name: 'docCount',
            required: true,
            elementName: {
              localPart: 'docCount',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Integer'
          }]
      }, {
        localName: 'TAppliedDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TAppliedDocument'
        },
        baseTypeInfo: '.TDocument'
      }, {
        localName: 'TAddressLocality',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressLocality'
        },
        baseTypeInfo: '.TAddressCity'
      }, {
        localName: 'TElectronicInsteadDocumentary',
        propertyInfos: [{
            name: 'issueDate',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'cancellationDate',
            required: true,
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TFromDate',
        propertyInfos: [{
            name: 'fixedDate',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'eventDriven',
            required: true
          }, {
            name: 'dateLoan',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TElectronicInsteadDocumentaryModification',
        propertyInfos: [{
            name: 'replace',
            required: true,
            typeInfo: '.TElectronicInsteadDocumentary'
          }, {
            name: 'addSection',
            required: true,
            typeInfo: '.TElectronicInsteadDocumentary'
          }, {
            name: 'deleteSection',
            required: true,
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TRequestCadastralNumber',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TRequestCadastralNumber'
        },
        baseTypeInfo: '.TCadastralNumberBase'
      }, {
        localName: 'TEGRNRequestCadastralBlock',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TEGRNRequestCadastralBlock'
        },
        baseTypeInfo: '.CadastralBlock'
      }, {
        localName: 'TLastPeriodIfWeekend',
        propertyInfos: [{
            name: 'lastPeriod',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TLengthPhysicalValue',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TLengthPhysicalValue'
        },
        baseTypeInfo: '.TPhysicalValue'
      }, {
        localName: 'TInterval',
        propertyInfos: [{
            name: 'count',
            required: true,
            typeInfo: 'PositiveInteger'
          }, {
            name: 'timeUnits',
            required: true
          }]
      }, {
        localName: 'TPikObject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TPikObject'
        },
        baseTypeInfo: '.TBasicObject'
      }, {
        localName: 'TPowerOfAttorney',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TPowerOfAttorney'
        },
        baseTypeInfo: '.TStrictDocument'
      }, {
        localName: 'TRateAndInterval',
        propertyInfos: [{
            name: 'rateAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'intervalType',
            required: true
          }]
      }, {
        localName: 'TPrincipalAmountOfDebtRepaymentNoOne',
        propertyInfos: [{
            name: 'principalAmountOfDebtRepaymentNoOne',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TPledgesEdit',
        propertyInfos: [{
            name: 'pledge',
            required: true,
            collection: true,
            typeInfo: '.TModification'
          }]
      }, {
        localName: 'TRegularity',
        propertyInfos: [{
            name: 'regularityList',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TPrice',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: '.TCostRubType'
          }, {
            name: 'cadastralPrice',
            required: true,
            typeInfo: '.TCostRubType'
          }]
      }, {
        localName: 'TDocumentWithNumber',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TDocumentWithNumber'
        },
        baseTypeInfo: '.TStrictDocument'
      }, {
        localName: 'TBasicSomeDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TBasicSomeDocument'
        },
        propertyInfos: [{
            name: 'document',
            elementName: {
              localPart: 'document',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TDocument'
          }, {
            name: 'otherDocument',
            elementName: {
              localPart: 'otherDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TOtherDocumentRestr'
          }, {
            name: 'paymentDocument',
            elementName: {
              localPart: 'paymentDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TPaymentDocumentRestr'
          }, {
            name: 'idDocument',
            elementName: {
              localPart: 'idDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TIdDocumentRestr'
          }, {
            name: 'powerOfAttorney',
            elementName: {
              localPart: 'powerOfAttorney',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TPowerOfAttorneyRestr'
          }, {
            name: 'mapPlanDocument',
            elementName: {
              localPart: 'mapPlanDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TMapPlanDocumentRestr'
          }, {
            name: 'interdepDocument',
            elementName: {
              localPart: 'interdepDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TInterdepDocument'
          }, {
            name: 'legalAct',
            elementName: {
              localPart: 'legalAct',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TLegalAct'
          }, {
            name: 'confirmPrivilege',
            elementName: {
              localPart: 'confirmPrivilege',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TConfirmPrivilege'
          }]
      }, {
        localName: 'TReceivedInPaper',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TReceivedInPaper'
        },
        propertyInfos: [{
            name: 'original',
            elementName: {
              localPart: 'original',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TQuantity'
          }, {
            name: 'copy',
            elementName: {
              localPart: 'copy',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TQuantity'
          }]
      }, {
        localName: 'AppliedPowerOfAttorneyDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedPowerOfAttorneyDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TAppliedDocumentsObject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TAppliedDocumentsObject'
        },
        baseTypeInfo: '.TBasicObject'
      }, {
        localName: 'TBasicStrictDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TBasicStrictDocument'
        },
        baseTypeInfo: '.TDocument',
        propertyInfos: [{
            name: 'series',
            elementName: {
              localPart: 'series',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'issuer',
            elementName: {
              localPart: 'issuer',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TIssuerInfo'
          }, {
            name: 'durationStart',
            elementName: {
              localPart: 'durationStart',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Date'
          }, {
            name: 'durationStop',
            elementName: {
              localPart: 'durationStop',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Date'
          }, {
            name: 'notaryInfo',
            elementName: {
              localPart: 'notaryInfo',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TNotaryInfo'
          }]
      }, {
        localName: 'TConfirmPrivilege',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TConfirmPrivilege'
        },
        baseTypeInfo: '.TStrictDocument'
      }, {
        localName: 'TDecisionAuthority',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TDecisionAuthority'
        },
        baseTypeInfo: '.TDocument',
        propertyInfos: [{
            name: 'series',
            elementName: {
              localPart: 'series',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'issuer',
            required: true,
            elementName: {
              localPart: 'issuer',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TIssuerInfo'
          }]
      }, {
        localName: 'TAttachmentFile',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TAttachmentFile'
        },
        propertyInfos: [{
            name: 'fileURI',
            required: true,
            elementName: {
              localPart: 'fileURI',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'md5Sum',
            required: true,
            elementName: {
              localPart: 'md5sum',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'fileSize',
            elementName: {
              localPart: 'fileSize',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Integer'
          }, {
            name: 'fileCreationDate',
            elementName: {
              localPart: 'fileCreationDate',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'DateTime'
          }]
      }, {
        localName: 'TBasicObject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TBasicObject'
        },
        propertyInfos: [{
            name: 'objectTypeCode',
            required: true,
            elementName: {
              localPart: 'objectTypeCode',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'customTypeDesc',
            elementName: {
              localPart: 'customTypeDesc',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'cadastralNumber',
            elementName: {
              localPart: 'cadastralNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TCadastralNumberBase'
          }, {
            name: 'address',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'address',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TAddress'
          }, {
            name: 'physicalProperties',
            elementName: {
              localPart: 'physicalProperties',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TObjectPhysicalProperties'
          }, {
            name: 'notes',
            elementName: {
              localPart: 'notes',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TObjectNotes'
          }, {
            name: 'id',
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TObjectRoomPurposeNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectRoomPurposeNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TInterestRepayment',
        propertyInfos: [{
            name: 'repaymentKind',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'AppliedLegalActDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedLegalActDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TAccrualRules',
        propertyInfos: [{
            name: 'regularity',
            required: true,
            typeInfo: '.TRegularity'
          }, {
            name: 'accrualBase',
            required: true,
            typeInfo: '.TAccrualBase'
          }, {
            name: 'interestsRounding',
            required: true,
            typeInfo: '.TInterestsRounding'
          }, {
            name: 'intermedRounding',
            required: true,
            typeInfo: '.TIntermedRounding'
          }]
      }, {
        localName: 'TAddressElement',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement'
        },
        propertyInfos: [{
            name: 'code',
            elementName: {
              localPart: 'code',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'type',
            required: true,
            elementName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'name',
            required: true,
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }]
      }, {
        localName: 'AppliedLegalActDocumentMIVTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedLegalActDocumentMIVTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TAddressElement4Street',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement4Street'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'THouse',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'THouse'
        },
        propertyInfos: [{
            name: 'type',
            required: true,
            elementName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'value',
            required: true,
            elementName: {
              localPart: 'value',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }]
      }, {
        localName: 'TCadastralNumberBlock',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TCadastralNumberBlock'
        },
        baseTypeInfo: '.TCadastralNumberBase'
      }, {
        localName: 'TRecalculationConditions',
        propertyInfos: [{
            name: 'conditions',
            typeInfo: '.TRecalculation'
          }, {
            name: 'otherDescription'
          }]
      }, {
        localName: 'TPledges',
        propertyInfos: [{
            name: 'pledge',
            required: true,
            collection: true,
            typeInfo: '.TPledge'
          }]
      }, {
        localName: 'TAddressElement3',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement3'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'TBankDetails',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TBankDetails'
        },
        propertyInfos: [{
            name: 'settlementAccount',
            required: true,
            elementName: {
              localPart: 'settlementAccount',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'roomOffice',
            required: true,
            elementName: {
              localPart: 'roomOffice',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'bankName',
            required: true,
            elementName: {
              localPart: 'bankName',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'address',
            required: true,
            elementName: {
              localPart: 'address',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TAddress'
          }, {
            name: 'bic',
            required: true,
            elementName: {
              localPart: 'BIC',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'correspondentAccount',
            required: true,
            elementName: {
              localPart: 'correspondentAccount',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'PositiveInteger'
          }, {
            name: 'inn',
            elementName: {
              localPart: 'INN',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TBasicPerson',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TBasicPerson'
        },
        baseTypeInfo: '.TSubject',
        propertyInfos: [{
            name: 'surname',
            required: true,
            elementName: {
              localPart: 'surname',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'firstname',
            required: true,
            elementName: {
              localPart: 'firstname',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'patronymic',
            elementName: {
              localPart: 'patronymic',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'birthDate',
            elementName: {
              localPart: 'birthDate',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: 'Date'
          }, {
            name: 'birthPlace',
            elementName: {
              localPart: 'birthPlace',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'idDocument',
            elementName: {
              localPart: 'idDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TIdDocumentRestr'
          }, {
            name: 'snils',
            elementName: {
              localPart: 'snils',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TOtherSubject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TOtherSubject'
        },
        baseTypeInfo: '.TSubject',
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'nameAuthority',
            required: true,
            elementName: {
              localPart: 'nameAuthority',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TConditions',
        propertyInfos: [{
            name: 'condition',
            required: true,
            collection: true
          }]
      }, {
        localName: 'TInterestsRounding',
        propertyInfos: [{
            name: 'interestsRoundingList',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TOtherDebtRepayment',
        propertyInfos: [{
            name: 'otherObligation',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TFineAmount',
        propertyInfos: [{
            name: 'fineAmount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'finePeriod',
            required: true
          }]
      }, {
        localName: 'TEGRNRequestObject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TEGRNRequestObject'
        },
        baseTypeInfo: '.TBasicObject'
      }, {
        localName: 'TLegalActRestrMGContract',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalActRestrMGContract'
        },
        baseTypeInfo: '.TLegalActRestrMG',
        propertyInfos: [{
            name: 'placeContract',
            required: true,
            elementName: {
              localPart: 'placeContract',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TPurposeOfCredit',
        propertyInfos: [{
            name: 'purposeOfCreditKind',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TEmpty',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/MgCommons',
          localPart: 'TEmpty'
        }
      }, {
        localName: 'TSomeInterdepDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TSomeInterdepDocument'
        },
        baseTypeInfo: '.TBasicSomeDocument'
      }, {
        localName: 'TAttachments',
        propertyInfos: [{
            name: 'noAppliedDocument',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'appliedDocument',
            required: true,
            collection: true,
            typeInfo: '.TSomeDocument'
          }]
      }, {
        localName: 'TBasePledge',
        propertyInfos: [{
            name: 'objectDescription',
            typeInfo: '.TObjectDescription'
          }, {
            name: 'leaseDescription',
            typeInfo: '.TLeaseDescription'
          }, {
            name: 'dduDescription',
            typeInfo: '.TDduDescription'
          }, {
            name: 'marketPrice',
            typeInfo: '.TMarketPrice'
          }, {
            name: 'burdens',
            typeInfo: '.TBurdens'
          }, {
            name: 'mortgage',
            typeInfo: '.TRegRight'
          }]
      }, {
        localName: 'TAddressRegion',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressRegion'
        },
        baseTypeInfo: '.TAddressCity'
      }, {
        localName: 'TInterestPeriod',
        propertyInfos: [{
            name: 'startDate',
            required: true,
            typeInfo: '.TIinterestAccrualDate'
          }, {
            name: 'endDate',
            required: true,
            typeInfo: '.TIinterestAccrualEndDate'
          }]
      }, {
        localName: 'TPledger',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TPledger'
        },
        propertyInfos: [{
            name: 'pledger',
            required: true,
            collection: true,
            elementName: {
              localPart: 'pledger',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TMgSubject'
          }]
      }, {
        localName: 'TIterests',
        baseTypeInfo: '.TBaseIterests'
      }, {
        localName: 'TAddressElement2',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement2'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'TDebtor',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TDebtor'
        },
        propertyInfos: [{
            name: 'debtor',
            required: true,
            collection: true,
            elementName: {
              localPart: 'debtor',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TMgSubject'
          }]
      }, {
        localName: 'TFines',
        propertyInfos: [{
            name: 'violationOfInterestConditions',
            required: true,
            typeInfo: '.TFinesAmount'
          }, {
            name: 'violationOfPrincipalDebtConditions',
            required: true,
            typeInfo: '.TFinesAmount'
          }, {
            name: 'calculationProcedure',
            required: true
          }, {
            name: 'amountOfLoss',
            required: true,
            typeInfo: '.TRoundingResult'
          }]
      }, {
        localName: 'TBurdens',
        propertyInfos: [{
            name: 'rightRestrictions',
            required: true,
            typeInfo: '.TRightRestrictions'
          }, {
            name: 'absent',
            required: true,
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TDebtRepaymentPlanModification',
        propertyInfos: [{
            name: 'replace',
            required: true,
            typeInfo: '.TDebtRepaymentPlan'
          }, {
            name: 'edit',
            required: true,
            typeInfo: '.TBaseDebtRepaymentPlan'
          }]
      }, {
        localName: 'TValuerPerson',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TValuerPerson'
        },
        baseTypeInfo: '.TBasicPerson'
      }, {
        localName: 'TAmountUnknown',
        propertyInfos: [{
            name: 'conditions',
            required: true,
            typeInfo: '.TConditions'
          }, {
            name: 'procedureDetermining',
            required: true
          }]
      }, {
        localName: 'TDepositoryAccountingEdit',
        propertyInfos: [{
            name: 'edit',
            typeInfo: '.TBaseDepositoryAccounting'
          }, {
            name: 'add',
            typeInfo: '.TDepositoryAccountingAdd'
          }, {
            name: 'delete',
            typeInfo: '.TDepositoryAccountingDelete'
          }]
      }, {
        localName: 'TLegalActRestrMG',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalActRestrMG'
        },
        baseTypeInfo: '.TLegalActRestr'
      }, {
        localName: 'TObjectPikNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectPikNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'CadastralBlock',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'CadastralBlock'
        },
        propertyInfos: [{
            name: 'number',
            required: true,
            elementName: {
              localPart: 'number',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TCadastralNumberBlock'
          }, {
            name: 'orient',
            elementName: {
              localPart: 'Orient',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'id',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TFirstOwnerAgreement',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TFirstOwnerAgreement'
        },
        propertyInfos: [{
            name: 'firstOwner',
            required: true,
            collection: true,
            elementName: {
              localPart: 'firstOwner',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TMgSubjectFirstOwnerAgreement'
          }]
      }, {
        localName: 'TBaseIterests',
        propertyInfos: [{
            name: 'rate',
            typeInfo: '.TRate'
          }, {
            name: 'ratePeriod',
            typeInfo: '.TInterestPeriod'
          }, {
            name: 'firstInterestPeriod',
            typeInfo: '.TFirstInterestPeriod'
          }, {
            name: 'baseInterestPeriod',
            typeInfo: '.TBaseInterestPeriod'
          }, {
            name: 'lastInterestPeriod',
            typeInfo: '.TLastInterestPeriod'
          }, {
            name: 'lastPeriodIfWeekend',
            typeInfo: '.TLastPeriodIfWeekend'
          }, {
            name: 'accrualRules',
            typeInfo: '.TAccrualRules'
          }]
      }, {
        localName: 'TOtherInfo',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TOtherInfo'
        },
        baseTypeInfo: '.TContactInfo',
        propertyInfos: [{
            name: 'note',
            elementName: {
              localPart: 'note',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TMoneyPhysicalValue',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TMoneyPhysicalValue'
        },
        baseTypeInfo: '.TPhysicalValue'
      }, {
        localName: 'TFIO',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TFIO'
        },
        propertyInfos: [{
            name: 'surname',
            required: true,
            elementName: {
              localPart: 'surname',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'firstname',
            required: true,
            elementName: {
              localPart: 'firstname',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'patronymic',
            elementName: {
              localPart: 'patronymic',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TIinterestAccrualEndDate',
        propertyInfos: [{
            name: 'date',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TAddressCityBase',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressCityBase'
        },
        propertyInfos: [{
            name: 'fias',
            required: true,
            elementName: {
              localPart: 'fias',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'okato',
            elementName: {
              localPart: 'okato',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'oktmo',
            elementName: {
              localPart: 'oktmo',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'kladr',
            elementName: {
              localPart: 'kladr',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'postalCode',
            elementName: {
              localPart: 'postalCode',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'region',
            required: true,
            elementName: {
              localPart: 'region',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement'
          }, {
            name: 'autonomy',
            elementName: {
              localPart: 'autonomy',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement'
          }, {
            name: 'district',
            elementName: {
              localPart: 'district',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement'
          }, {
            name: 'city',
            elementName: {
              localPart: 'city',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement'
          }, {
            name: 'urbanDistrict',
            elementName: {
              localPart: 'urbanDistrict',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement'
          }, {
            name: 'locality',
            elementName: {
              localPart: 'locality',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement'
          }]
      }, {
        localName: 'TObjectDescription',
        propertyInfos: [{
            name: 'object',
            required: true,
            typeInfo: '.TObject'
          }, {
            name: 'rightKind'
          }, {
            name: 'regRight',
            typeInfo: '.TRegRight'
          }]
      }, {
        localName: 'TRate',
        propertyInfos: [{
            name: 'fixedRate',
            required: true,
            typeInfo: '.TRateAndInterval'
          }, {
            name: 'variableRate',
            required: true,
            typeInfo: '.TVariableRate'
          }]
      }, {
        localName: 'TFileDesc',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TFileDesc'
        },
        propertyInfos: [{
            name: 'file',
            required: true,
            elementName: {
              localPart: 'file',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TAttachmentFile'
          }, {
            name: 'signature',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'signature',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TAttachmentFile'
          }]
      }, {
        localName: 'TRepaymentIfWeekend',
        propertyInfos: [{
            name: 'changingPaymentDay',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TPropertyInsurance',
        propertyInfos: [{
            name: 'riskInsurance',
            required: true,
            typeInfo: 'Boolean'
          }, {
            name: 'payer',
            required: true
          }, {
            name: 'beneficiary',
            required: true,
            typeInfo: '.TBeneficiary'
          }, {
            name: 'insuranceAmount',
            required: true,
            typeInfo: '.TInsuranceAmount'
          }]
      }, {
        localName: 'TPledge',
        baseTypeInfo: '.TBasePledge'
      }, {
        localName: 'TBasicMgSubject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TBasicMgSubject'
        },
        propertyInfos: [{
            name: 'person',
            required: true,
            elementName: {
              localPart: 'person',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TPerson'
          }, {
            name: 'organization',
            required: true,
            elementName: {
              localPart: 'organization',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TOrganization'
          }, {
            name: 'other',
            required: true,
            elementName: {
              localPart: 'other',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TOtherSubject'
          }, {
            name: 'firstOwnerKind',
            elementName: {
              localPart: 'firstOwnerKind',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'representative',
            elementName: {
              localPart: 'representative',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TRepresentative'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TLegalActRestr',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalActRestr'
        },
        baseTypeInfo: '.TLegalAct'
      }, {
        localName: 'TStrictDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TStrictDocument'
        },
        baseTypeInfo: '.TBasicStrictDocument'
      }, {
        localName: 'TPaymentDate',
        propertyInfos: [{
            name: 'event',
            typeInfo: '.TEmpty'
          }, {
            name: 'date',
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TSizeExcessivelyPaidAmount',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TSizeExcessivelyPaidAmount'
        },
        propertyInfos: [{
            name: 'amount',
            required: true,
            elementName: {
              localPart: 'amount',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Long'
          }, {
            name: 'amountWords',
            required: true,
            elementName: {
              localPart: 'amountWords',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TAttachment',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TAttachment'
        },
        propertyInfos: [{
            name: 'desc',
            elementName: {
              localPart: 'desc',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'fileDesc',
            elementName: {
              localPart: 'fileDesc',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TFileDesc'
          }, {
            name: 'receivedInPaper',
            elementName: {
              localPart: 'receivedInPaper',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TReceivedInPaper'
          }]
      }, {
        localName: 'TInterdepDocumentApplied',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TInterdepDocumentApplied'
        },
        baseTypeInfo: '.TInterdepDocument'
      }, {
        localName: 'TDepository',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TDepository'
        },
        baseTypeInfo: '.TSubject',
        propertyInfos: [{
            name: 'name',
            required: true,
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'nativeForeignParams',
            required: true,
            elementName: {
              localPart: 'nativeForeignParams',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TNativeParamsDepositary'
          }, {
            name: 'address',
            required: true,
            elementName: {
              localPart: 'address',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TAddress'
          }]
      }, {
        localName: 'AppliedOtherDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedOtherDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TLegalActDdu',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalActDdu'
        },
        baseTypeInfo: '.TLegalAct'
      }, {
        localName: 'TAddressElement1',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement1'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'TPhysicalValue',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TPhysicalValue'
        },
        propertyInfos: [{
            name: 'unitType',
            required: true,
            elementName: {
              localPart: 'unitType',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'value',
            required: true,
            elementName: {
              localPart: 'value',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: 'Decimal'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TMgSubjectFirstOwnerAgreement',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TMgSubjectFirstOwnerAgreement'
        },
        baseTypeInfo: '.TMgSubjectFirstOwner',
        propertyInfos: [{
            name: 'modification',
            required: true,
            elementName: {
              localPart: 'modification',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TDepositoryAccounting',
        baseTypeInfo: '.TBaseDepositoryAccounting'
      }, {
        localName: 'TMortgageDelete',
        propertyInfos: [{
            name: 'mortgage',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'object',
            required: true,
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TOtherDocumentRestr',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TOtherDocumentRestr'
        },
        baseTypeInfo: '.TStrictDocument'
      }, {
        localName: 'TModification',
        propertyInfos: [{
            name: 'idObject',
            required: true,
            typeInfo: 'Token'
          }, {
            name: 'cadastralNumber',
            required: true
          }, {
            name: 'dduKey',
            required: true,
            typeInfo: '.TDduKey'
          }, {
            name: 'edit',
            typeInfo: '.TBasePledge'
          }, {
            name: 'add',
            typeInfo: '.TMortgageAdd'
          }, {
            name: 'delete',
            typeInfo: '.TMortgageDelete'
          }]
      }, {
        localName: 'TCadastralNumberBase',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TCadastralNumberBase'
        },
        propertyInfos: [{
            name: 'cadastralNumber',
            required: true,
            elementName: {
              localPart: 'cadastralNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'oldCadastralNumber',
            elementName: {
              localPart: 'oldCadastralNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'conditionalNumber',
            elementName: {
              localPart: 'conditionalNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }]
      }, {
        localName: 'TValuers.Valuer',
        typeName: null,
        baseTypeInfo: '.TValuer',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TForeignOrgParams',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TForeignOrgParams'
        },
        propertyInfos: [{
            name: 'countryCode',
            required: true,
            elementName: {
              localPart: 'countryCode',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'regDate',
            required: true,
            elementName: {
              localPart: 'regDate',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: 'Date'
          }, {
            name: 'nameAuthority',
            required: true,
            elementName: {
              localPart: 'nameAuthority',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'regNumber',
            required: true,
            elementName: {
              localPart: 'regNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'inn',
            elementName: {
              localPart: 'inn',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TMortgageAdd',
        propertyInfos: [{
            name: 'object',
            required: true,
            typeInfo: '.TPledge'
          }, {
            name: 'mortgage',
            required: true,
            typeInfo: '.TRegRight'
          }]
      }, {
        localName: 'AppliedIdDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedIdDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TAddress',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddress'
        },
        baseTypeInfo: '.TAddressCity',
        propertyInfos: [{
            name: 'street',
            elementName: {
              localPart: 'street',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement4Street'
          }, {
            name: 'additionalElement',
            elementName: {
              localPart: 'additionalElement',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement4'
          }, {
            name: 'subordinateElement',
            elementName: {
              localPart: 'subordinateElement',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TAddressElement3'
          }, {
            name: 'house',
            elementName: {
              localPart: 'house',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.THouse'
          }, {
            name: 'building',
            elementName: {
              localPart: 'building',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.THouse'
          }, {
            name: 'structure',
            elementName: {
              localPart: 'structure',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.THouse'
          }, {
            name: 'apartment',
            elementName: {
              localPart: 'apartment',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            },
            typeInfo: '.TApartment'
          }, {
            name: 'other',
            elementName: {
              localPart: 'other',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'note',
            elementName: {
              localPart: 'note',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }]
      }, {
        localName: 'TObject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObject'
        },
        baseTypeInfo: '.TBasicObject'
      }, {
        localName: 'TIntermedRounding',
        propertyInfos: [{
            name: 'intermedRoundingList',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TBaseAdditionalTerms',
        propertyInfos: [{
            name: 'dependencies',
            typeInfo: '.TDependencies'
          }, {
            name: 'purposeOfCredit',
            typeInfo: '.TPurposeOfCredit'
          }, {
            name: 'debtorIsBusinessman',
            typeInfo: 'Boolean'
          }, {
            name: 'propertyInsurance',
            typeInfo: '.TPropertyInsurance'
          }, {
            name: 'insuranceTerms'
          }, {
            name: 'punishmentTerms'
          }, {
            name: 'pledgeSellingConditions'
          }, {
            name: 'estrangementTerms',
            typeInfo: '.TEstrangementTerms'
          }, {
            name: 'thirdPersonUsage',
            typeInfo: '.TThirdPersonUsage'
          }, {
            name: 'prepaymentTerms'
          }, {
            name: 'paymentPlanChangeTerms'
          }, {
            name: 'paymentPlanViolationTerms'
          }, {
            name: 'participantRights'
          }, {
            name: 'debtorDuties'
          }, {
            name: 'creditorDuties'
          }, {
            name: 'pledgeeRights'
          }, {
            name: 'groundOfFulleEarlyPerformance'
          }, {
            name: 'jurisdictionOfDisputes'
          }, {
            name: 'otherMortgageTerms'
          }, {
            name: 'loanAgreementEffect'
          }, {
            name: 'attachments',
            typeInfo: '.TAttachments'
          }, {
            name: 'demands',
            typeInfo: '.TDemands'
          }]
      }, {
        localName: 'TElectronicMortgage',
        propertyInfos: [{
            name: 'pledgers',
            required: true,
            typeInfo: '.TPledger'
          }, {
            name: 'debtors',
            required: true,
            typeInfo: '.TDebtor'
          }, {
            name: 'firstOwners',
            required: true,
            typeInfo: '.TFirstOwner'
          }, {
            name: 'obligation',
            required: true,
            typeInfo: '.TObligation'
          }, {
            name: 'interests',
            required: true,
            typeInfo: '.TIterests'
          }, {
            name: 'debtRepaymentPlan',
            required: true,
            typeInfo: '.TDebtRepaymentPlan'
          }, {
            name: 'pledges',
            required: true,
            typeInfo: '.TPledges'
          }, {
            name: 'additionalTerms',
            required: true,
            typeInfo: '.TAdditionalTerms'
          }, {
            name: 'depositoryAccounting',
            required: true,
            typeInfo: '.TDepositoryAccounting'
          }, {
            name: 'electronicInsteadDocumentary',
            typeInfo: '.TElectronicInsteadDocumentary'
          }, {
            name: 'registrationInformation',
            typeInfo: '.TRegRight'
          }, {
            name: 'id',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }, {
            name: 'guid',
            required: true,
            attributeName: {
              localPart: 'GUID'
            },
            type: 'attribute'
          }, {
            name: 'nameSoftware',
            required: true,
            attributeName: {
              localPart: 'NameSoftware'
            },
            type: 'attribute'
          }, {
            name: 'versionSoftware',
            required: true,
            attributeName: {
              localPart: 'VersionSoftware'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TObjectTextNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectTextNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TSomeRepresentativeDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TSomeRepresentativeDocument'
        },
        propertyInfos: [{
            name: 'document',
            required: true,
            elementName: {
              localPart: 'document',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TStrictDocument'
          }, {
            name: 'powerOfAttorney',
            required: true,
            elementName: {
              localPart: 'powerOfAttorney',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TPowerOfAttorney'
          }, {
            name: 'legalAct',
            required: true,
            elementName: {
              localPart: 'legalAct',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TLegalAct'
          }]
      }, {
        localName: 'TFinesAmount',
        propertyInfos: [{
            name: 'finesAmount',
            required: true,
            typeInfo: '.TFineAmount'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TAddressElement4',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement4'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'TSomeDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TSomeDocument'
        },
        baseTypeInfo: '.TBasicSomeDocument'
      }, {
        localName: 'TMgSubjectFirstOwner',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TMgSubjectFirstOwner'
        },
        baseTypeInfo: '.TBasicMgSubject'
      }, {
        localName: 'TNthRepaymentAmountAndTerm',
        propertyInfos: [{
            name: 'paymentNumber',
            required: true,
            typeInfo: '.TPaymentNumber'
          }, {
            name: 'amount',
            required: true,
            typeInfo: '.TAmount'
          }, {
            name: 'repaymentDate',
            required: true,
            typeInfo: '.TPaymentDate'
          }, {
            name: 'repaymentValueOnDate',
            required: true,
            typeInfo: '.TCostType'
          }, {
            name: 'recalculationConditions',
            required: true,
            typeInfo: '.TRecalculationConditions'
          }, {
            name: 'repaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'interestRepayment',
            required: true,
            typeInfo: '.TInterestNoOneRepayment'
          }, {
            name: 'interestRepaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'principalAmountOfDebtRepayment',
            required: true,
            typeInfo: '.TPrincipalAmountOfDebtRepaymentNoOne'
          }, {
            name: 'principalAmountOfDebtRepaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'otherDebtRepayment',
            required: true,
            typeInfo: '.TOtherDebtRepayment'
          }, {
            name: 'otherDebtRepaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'repaymentTerm',
            required: true,
            typeInfo: '.TRepaymentTermNoOne'
          }]
      }, {
        localName: 'TIinterestAccrualDate',
        propertyInfos: [{
            name: 'date',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'AppliedMapPlanDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedMapPlanDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TBasicRequestDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TBasicRequestDocument'
        },
        baseTypeInfo: '.TBasicStrictDocument'
      }, {
        localName: 'TVolumePhysicalValue',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TVolumePhysicalValue'
        },
        baseTypeInfo: '.TPhysicalValue'
      }, {
        localName: 'TSomeAppliedDocuments',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TSomeAppliedDocuments'
        },
        baseTypeInfo: '.TBasicSomeDocument'
      }, {
        localName: 'TThirdPersonUsage',
        propertyInfos: [{
            name: 'thirdPersonUsageKind',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TPledgeAgreement'
      }, {
        localName: 'TLoanAmount',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: '.TCostType'
          }, {
            name: 'amountUnknown',
            required: true,
            typeInfo: '.TAmountUnknown'
          }, {
            name: 'procedureGranting',
            required: true
          }, {
            name: 'remainingAmount',
            typeInfo: '.TRemainingAmount'
          }]
      }, {
        localName: 'TBaseNativeForeignParams',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TBaseNativeForeignParams'
        },
        propertyInfos: [{
            name: 'nativeOrgParams',
            required: true,
            elementName: {
              localPart: 'nativeOrgParams',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TNativeOrgParams'
          }, {
            name: 'foreignOrgParams',
            elementName: {
              localPart: 'foreignOrgParams',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TForeignOrgParams'
          }]
      }, {
        localName: 'TDocumentSeries',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TDocumentSeries'
        },
        baseTypeInfo: '.TStrictDocument'
      }, {
        localName: 'TProp',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TProp'
        },
        propertyInfos: [{
            name: 'objectPurpose',
            required: true,
            elementName: {
              localPart: 'objectPurpose',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'usageType',
            required: true,
            elementName: {
              localPart: 'usageType',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }]
      }, {
        localName: 'TPaymentNumber',
        propertyInfos: [{
            name: 'fromPaymentNumber',
            required: true,
            typeInfo: 'PositiveInteger'
          }, {
            name: 'byPaymentNumber',
            required: true,
            typeInfo: 'PositiveInteger'
          }]
      }, {
        localName: 'TAgreementAmendments',
        propertyInfos: [{
            name: 'pledgers',
            required: true,
            typeInfo: '.TPledgerAgreement'
          }, {
            name: 'debtors',
            required: true,
            typeInfo: '.TDebtorAgreement'
          }, {
            name: 'firstOwners',
            required: true,
            typeInfo: '.TFirstOwnerAgreement'
          }, {
            name: 'obligation',
            typeInfo: '.TObligationModification'
          }, {
            name: 'interests',
            typeInfo: '.TIterestsModification'
          }, {
            name: 'debtRepaymentPlan',
            typeInfo: '.TDebtRepaymentPlanModification'
          }, {
            name: 'pledges',
            typeInfo: '.TPledgesModification'
          }, {
            name: 'additionalTerms',
            typeInfo: '.TAdditionalTermsModification'
          }, {
            name: 'depositoryAccounting',
            typeInfo: '.TDepositoryAccountingModification'
          }, {
            name: 'electronicInsteadDocumentary',
            typeInfo: '.TElectronicInsteadDocumentaryModification'
          }, {
            name: 'id',
            required: true,
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }, {
            name: 'guid',
            required: true,
            attributeName: {
              localPart: 'GUID'
            },
            type: 'attribute'
          }, {
            name: 'nameSoftware',
            required: true,
            attributeName: {
              localPart: 'NameSoftware'
            },
            type: 'attribute'
          }, {
            name: 'versionSoftware',
            required: true,
            attributeName: {
              localPart: 'VersionSoftware'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TBeneficiary',
        propertyInfos: [{
            name: 'beneficiaryKind',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TDepositoryAccountingModification',
        propertyInfos: [{
            name: 'replace',
            required: true,
            typeInfo: '.TDepositoryAccounting'
          }, {
            name: 'modification',
            required: true,
            typeInfo: '.TDepositoryAccountingEdit'
          }]
      }, {
        localName: 'TLegalActApplied',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalActApplied'
        },
        baseTypeInfo: '.TLegalActRestr'
      }, {
        localName: 'TVolumeDemands',
        propertyInfos: [{
            name: 'meetRequirements',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'dateAndEvent',
            required: true,
            typeInfo: '.TDateAndEvent'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Commons',
          localPart: 'TNote'
        },
        propertyInfos: [{
            name: 'code',
            required: true,
            elementName: {
              localPart: 'code',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Commons'
            }
          }, {
            name: 'text',
            required: true,
            elementName: {
              localPart: 'text',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Commons'
            }
          }]
      }, {
        localName: 'TDduDescription',
        propertyInfos: [{
            name: 'dduDescription',
            required: true
          }, {
            name: 'legalActDdu',
            required: true,
            typeInfo: '.TLegalActDdu'
          }, {
            name: 'regRight',
            typeInfo: '.TRegRight'
          }, {
            name: 'id',
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TMgSubject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TMgSubject'
        },
        baseTypeInfo: '.TBasicMgSubject'
      }, {
        localName: 'TInterdepObject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TInterdepObject'
        },
        baseTypeInfo: '.TBasicObject'
      }, {
        localName: 'TValuer',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TValuer'
        },
        propertyInfos: [{
            name: 'person',
            required: true,
            elementName: {
              localPart: 'person',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TValuerMGPerson'
          }, {
            name: 'organization',
            required: true,
            elementName: {
              localPart: 'organization',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TOrganization'
          }]
      }, {
        localName: 'TDocumentRefer',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TDocumentRefer'
        },
        propertyInfos: [{
            name: 'documentID',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: 'documentID'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'AppliedConfirmPrivilegeDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedConfirmPrivilegeDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TMarketPrice',
        propertyInfos: [{
            name: 'price',
            required: true,
            typeInfo: '.TPrice'
          }, {
            name: 'valuers',
            required: true,
            typeInfo: '.TValuers'
          }, {
            name: 'report',
            required: true,
            typeInfo: '.TReport'
          }]
      }, {
        localName: 'TIdentificationCodePayment',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TIdentificationCodePayment'
        },
        propertyInfos: [{
            name: 'number',
            required: true,
            elementName: {
              localPart: 'number',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'date',
            elementName: {
              localPart: 'date',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TFixedDate',
        propertyInfos: [{
            name: 'day',
            required: true
          }, {
            name: 'month',
            required: true,
            typeInfo: 'Integer'
          }, {
            name: 'year',
            required: true
          }, {
            name: 'monthQuantity',
            required: true,
            typeInfo: 'PositiveInteger'
          }]
      }, {
        localName: 'TDemand',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'compensationDamages',
            typeInfo: '.TEmpty'
          }, {
            name: 'interestUnlawfulUse',
            typeInfo: '.TEmpty'
          }, {
            name: 'recoveryLegalCosts',
            typeInfo: '.TEmpty'
          }, {
            name: 'costRecovery',
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TAdditionalTerms',
        baseTypeInfo: '.TBaseAdditionalTerms'
      }, {
        localName: 'TContractInfo',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TContractInfo'
        },
        propertyInfos: [{
            name: 'legalAct',
            required: true,
            elementName: {
              localPart: 'legalAct',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TLegalActRestrMGContract'
          }, {
            name: 'otherGround',
            required: true,
            elementName: {
              localPart: 'otherGround',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TSubject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TSubject'
        },
        propertyInfos: [{
            name: 'otherInfo',
            required: true,
            elementName: {
              localPart: 'otherInfo',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TOtherInfo'
          }]
      }, {
        localName: 'TPledgesModification',
        propertyInfos: [{
            name: 'replace',
            required: true,
            typeInfo: '.TPledges'
          }, {
            name: 'modificationPledges',
            required: true,
            typeInfo: '.TPledgesEdit'
          }]
      }, {
        localName: 'TRepaymentDate',
        propertyInfos: [{
            name: 'paymentDate',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'repaymentDay',
            required: true,
            typeInfo: '.TRepaymentDay'
          }, {
            name: 'repaymentPeriod',
            required: true,
            typeInfo: '.TRepaymentPeriod'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TAdditionalTermsModification',
        propertyInfos: [{
            name: 'replace',
            required: true,
            typeInfo: '.TAdditionalTerms'
          }, {
            name: 'modification',
            required: true,
            typeInfo: '.TAdditionalTermsEdit'
          }]
      }, {
        localName: 'TPledgerAgreement',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TPledgerAgreement'
        },
        propertyInfos: [{
            name: 'pledger',
            required: true,
            collection: true,
            elementName: {
              localPart: 'pledger',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TAgreementSubject'
          }]
      }, {
        localName: 'TAdditionalTermsDelete',
        propertyInfos: [{
            name: 'purposeOfCredit',
            typeInfo: '.TEmpty'
          }, {
            name: 'propertyInsurance',
            typeInfo: '.TEmpty'
          }, {
            name: 'insuranceTerms',
            typeInfo: '.TEmpty'
          }, {
            name: 'punishmentTerms',
            typeInfo: '.TEmpty'
          }, {
            name: 'pledgeSellingConditions',
            typeInfo: '.TEmpty'
          }, {
            name: 'thirdPersonUsage',
            typeInfo: '.TEmpty'
          }, {
            name: 'loanAgreementEffect',
            typeInfo: '.TEmpty'
          }, {
            name: 'demands',
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TContractsInfo',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TContractsInfo'
        },
        propertyInfos: [{
            name: 'contractInfo',
            required: true,
            maxOccurs: 2,
            collection: true,
            elementName: {
              localPart: 'contractInfo',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TContractInfo'
          }]
      }, {
        localName: 'TLastRepaymentAmountAndTerm',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: '.TLastPaymentAmount'
          }, {
            name: 'repaymentTerm',
            required: true,
            typeInfo: '.TRepaymentTermLastPayment'
          }]
      }, {
        localName: 'TSomeObjectNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TSomeObjectNote'
        },
        propertyInfos: [{
            name: 'propertyNote',
            elementName: {
              localPart: 'propertyNote',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TProp'
          }, {
            name: 'housingPurpose',
            elementName: {
              localPart: 'housingPurpose',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'roomPurpose',
            elementName: {
              localPart: 'roomPurpose',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'mark',
            elementName: {
              localPart: 'mark',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'note',
            elementName: {
              localPart: 'note',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'definitionMP',
            elementName: {
              localPart: 'definitionMP',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'inventoryNum',
            elementName: {
              localPart: 'inventoryNum',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'floor',
            elementName: {
              localPart: 'floor',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: 'Integer'
          }, {
            name: 'pik',
            elementName: {
              localPart: 'pik',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TPikObjects'
          }, {
            name: 'oldCadastralNumber',
            elementName: {
              localPart: 'oldCadastralNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            }
          }, {
            name: 'noteType',
            required: true,
            attributeName: {
              localPart: 'noteType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TLastInterestPeriod',
        propertyInfos: [{
            name: 'date',
            required: true,
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TPaymentDocumentRestr',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TPaymentDocumentRestr'
        },
        baseTypeInfo: '.TPaymentDocument'
      }, {
        localName: 'TEndDate',
        propertyInfos: [{
            name: 'byDate',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'byPeriod',
            required: true,
            typeInfo: '.TByPeriod'
          }, {
            name: 'byEvent',
            required: true
          }]
      }, {
        localName: 'TDepositorAccNumType',
        propertyInfos: [{
            name: 'number',
            required: true
          }, {
            name: 'section',
            typeInfo: 'Decimal'
          }]
      }, {
        localName: 'TObjectNotes.NoteGroup',
        typeName: null,
        propertyInfos: [{
            name: 'objectNote',
            required: true,
            collection: true,
            elementName: {
              localPart: 'objectNote',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TSomeObjectNote'
          }]
      }, {
        localName: 'TLegalActLeave',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalActLeave'
        },
        baseTypeInfo: '.TLegalAct'
      }, {
        localName: 'TObjectHousingPurposeNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectHousingPurposeNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TReport',
        propertyInfos: [{
            name: 'reportDate',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'evalDate',
            required: true,
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TConfirmPrivilegeApplied',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TConfirmPrivilegeApplied'
        },
        baseTypeInfo: '.TConfirmPrivilege'
      }, {
        localName: 'TNativeParamsDepositary',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TNativeParamsDepositary'
        },
        baseTypeInfo: '.TBaseNativeForeignParams'
      }, {
        localName: 'TVariableRate',
        baseTypeInfo: '.TRateAndInterval',
        propertyInfos: [{
            name: 'conditions',
            required: true,
            typeInfo: '.TConditions'
          }]
      }, {
        localName: 'TCostRubType',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'currency',
            required: true
          }]
      }, {
        localName: 'TRepresentative',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TRepresentative'
        },
        propertyInfos: [{
            name: 'subject',
            required: true,
            elementName: {
              localPart: 'subject',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TPerson'
          }, {
            name: 'representativeDocument',
            required: true,
            elementName: {
              localPart: 'representativeDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TRepresentativeDocument'
          }, {
            name: 'id',
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TRepaymentTermNoOne',
        propertyInfos: [{
            name: 'termNoOneKind',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TNthRepaymentAmountAndTerms',
        propertyInfos: [{
            name: 'nthRepaymentAmountAndTerm',
            required: true,
            collection: true,
            typeInfo: '.TNthRepaymentAmountAndTerm'
          }]
      }, {
        localName: 'TObjectFloorNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectFloorNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TBaseInterestPeriod',
        propertyInfos: [{
            name: 'byDateInterval',
            required: true,
            typeInfo: '.TByDateInterval'
          }, {
            name: 'byRepaymentDate',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'date',
            required: true,
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TCadastralNumber',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TCadastralNumber'
        },
        baseTypeInfo: '.TCadastralNumberBase'
      }, {
        localName: 'TFirstRepaymentAmountAndTerm',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: '.TAmount'
          }, {
            name: 'repaymentDate',
            required: true,
            typeInfo: '.TPaymentDate'
          }, {
            name: 'repaymentValueOnDate',
            typeInfo: '.TCostType'
          }, {
            name: 'recalculationConditions',
            required: true,
            typeInfo: '.TRecalculationConditions'
          }, {
            name: 'repaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'interestRepayment',
            required: true,
            typeInfo: '.TInterestRepayment'
          }, {
            name: 'interestRepaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'principalAmountOfDebtRepayment',
            required: true,
            typeInfo: '.TPrincipalAmountOfDebtRepayment'
          }, {
            name: 'principalAmountOfDebtRepaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'otherDebtRepayment',
            required: true,
            typeInfo: '.TOtherDebtRepayment'
          }, {
            name: 'otherDebtRepaymentRounding',
            required: true,
            typeInfo: '.TRoundingResult'
          }, {
            name: 'repaymentTerm',
            required: true,
            typeInfo: '.TRepaymentTerm'
          }]
      }, {
        localName: 'TLegalAct',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalAct'
        },
        baseTypeInfo: '.TDocumentWithNumber',
        propertyInfos: [{
            name: 'officialPublicationSource',
            elementName: {
              localPart: 'officialPublicationSource',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TValuers',
        propertyInfos: [{
            name: 'valuer',
            required: true,
            collection: true,
            typeInfo: '.TValuers.Valuer'
          }]
      }, {
        localName: 'TTerm',
        propertyInfos: [{
            name: 'fromDate',
            required: true,
            typeInfo: '.TFromDate'
          }, {
            name: 'endDate',
            required: true,
            typeInfo: '.TEndDate'
          }]
      }, {
        localName: 'TObjectInventoryNumNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectInventoryNumNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TIssuerInfo',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TIssuerInfo'
        },
        propertyInfos: [{
            name: 'code',
            elementName: {
              localPart: 'code',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'name',
            required: true,
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TObjectDefinitionMPNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectDefinitionMPNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TNativeForeignParams',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TNativeForeignParams'
        },
        baseTypeInfo: '.TBaseNativeForeignParams'
      }, {
        localName: 'TByDateInterval',
        propertyInfos: [{
            name: 'intervalStart',
            required: true
          }, {
            name: 'intervalEnd',
            required: true
          }, {
            name: 'interval',
            required: true
          }, {
            name: 'repeatOther',
            required: true
          }]
      }, {
        localName: 'TRecalculation',
        propertyInfos: [{
            name: 'listConditions',
            required: true,
            collection: true
          }]
      }, {
        localName: 'TPerson',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TPerson'
        },
        baseTypeInfo: '.TBasicPerson'
      }, {
        localName: 'TRepaymentPeriod',
        propertyInfos: [{
            name: 'startPeriod',
            required: true,
            typeInfo: 'Integer'
          }, {
            name: 'endPeriod',
            required: true
          }, {
            name: 'payPeriod',
            required: true
          }]
      }, {
        localName: 'AppliedLegalActDocumentTypesLeave',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedLegalActDocumentTypesLeave'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TPikObjects',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TPikObjects'
        },
        propertyInfos: [{
            name: 'objectPik',
            required: true,
            collection: true,
            elementName: {
              localPart: 'objectPik',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TPikObject'
          }]
      }, {
        localName: 'TRemainingAmount',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: '.TCostType'
          }, {
            name: 'date',
            required: true,
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TObjectNotes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectNotes'
        },
        propertyInfos: [{
            name: 'noteGroup',
            required: true,
            elementName: {
              localPart: 'noteGroup',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TObjectNotes.NoteGroup'
          }]
      }, {
        localName: 'TObligationModification',
        propertyInfos: [{
            name: 'replace',
            required: true,
            typeInfo: '.TObligation'
          }, {
            name: 'edit',
            required: true,
            typeInfo: '.TBaseObligation'
          }]
      }, {
        localName: 'TRepaymentTerm',
        propertyInfos: [{
            name: 'termKind',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'AppliedLegalActDocumentTypesDdu',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedLegalActDocumentTypesDdu'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TOtherAppliedDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TOtherAppliedDocument'
        },
        baseTypeInfo: '.TOtherDocumentRestr'
      }, {
        localName: 'TAdditionalTermsEdit',
        propertyInfos: [{
            name: 'edit',
            typeInfo: '.TBaseAdditionalTerms'
          }, {
            name: 'add',
            typeInfo: '.TAdditionalTermsAdd'
          }, {
            name: 'delete',
            typeInfo: '.TAdditionalTermsDelete'
          }]
      }, {
        localName: 'DocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'DocumentTypes'
        },
        propertyInfos: [{
            name: 'documentTypeCode',
            required: true,
            elementName: {
              localPart: 'documentTypeCode',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'representativeDocTypeCode',
            required: true,
            elementName: {
              localPart: 'representativeDocTypeCode',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TRightRestrictions',
        propertyInfos: [{
            name: 'rightKind',
            required: true
          }, {
            name: 'rightRestrictionsKind',
            required: true
          }, {
            name: 'terms'
          }, {
            name: 'regNumber',
            required: true
          }, {
            name: 'regDate',
            required: true,
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TDepositoryAccountingAdd',
        propertyInfos: [{
            name: 'nomineeDep',
            typeInfo: '.TDepository'
          }, {
            name: 'nomineeAccountNum',
            typeInfo: '.TDepositorAccNumType'
          }]
      }, {
        localName: 'AppliedPaymentDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedPaymentDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TIdDocumentRestr',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TIdDocumentRestr'
        },
        baseTypeInfo: '.TDocumentWithNumber'
      }, {
        localName: 'TBaseDepositoryAccounting',
        propertyInfos: [{
            name: 'custody',
            typeInfo: '.TDepository'
          }, {
            name: 'nomineeDep',
            typeInfo: '.TDepository'
          }, {
            name: 'nomineeAccountNum',
            typeInfo: '.TDepositorAccNumType'
          }, {
            name: 'accountingDep',
            typeInfo: '.TDepository'
          }, {
            name: 'accountNum',
            typeInfo: '.TDepositorAccNumType'
          }, {
            name: 'depositorAccNum',
            typeInfo: '.TDepositorAccNumType'
          }]
      }, {
        localName: 'TNotaryInfo',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TNotaryInfo'
        },
        propertyInfos: [{
            name: 'register',
            required: true,
            elementName: {
              localPart: 'register',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TFIO'
          }, {
            name: 'registryNumber',
            elementName: {
              localPart: 'registryNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'dateOfCertification',
            required: true,
            elementName: {
              localPart: 'dateOfCertification',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TRoundingResult',
        propertyInfos: [{
            name: 'rounding',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TPowerOfAttorneyRestr',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TPowerOfAttorneyRestr'
        },
        baseTypeInfo: '.TPowerOfAttorney'
      }, {
        localName: 'TNativeOrgParams',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TNativeOrgParams'
        },
        propertyInfos: [{
            name: 'ogrn',
            required: true,
            elementName: {
              localPart: 'ogrn',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'inn',
            required: true,
            elementName: {
              localPart: 'inn',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TAdditionalTermsAdd',
        baseTypeInfo: '.TBaseAdditionalTerms'
      }, {
        localName: 'TApartment',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TApartment'
        },
        propertyInfos: [{
            name: 'type',
            elementName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }, {
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address'
            }
          }]
      }, {
        localName: 'TMapPlanDocumentRestr',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TMapPlanDocumentRestr'
        },
        baseTypeInfo: '.TLegalAct'
      }, {
        localName: 'TIterestsModification',
        propertyInfos: [{
            name: 'replace',
            required: true,
            typeInfo: '.TIterests'
          }, {
            name: 'edit',
            required: true,
            typeInfo: '.TBaseIterests'
          }]
      }, {
        localName: 'TDateAndEvent',
        propertyInfos: [{
            name: 'date',
            required: true,
            typeInfo: 'Date'
          }, {
            name: 'event',
            required: true
          }]
      }, {
        localName: 'TObjectUsagePurposeNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectUsagePurposeNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TRegRight',
        propertyInfos: [{
            name: 'regRightAuthority',
            required: true
          }, {
            name: 'regNumber',
            required: true
          }, {
            name: 'regDate',
            required: true,
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TInsuranceAmount',
        propertyInfos: [{
            name: 'insuranceAmountKind',
            required: true
          }, {
            name: 'interest',
            typeInfo: 'Decimal'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TFirstInterestPeriod',
        propertyInfos: [{
            name: 'date',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TBaseDebtRepaymentPlan',
        propertyInfos: [{
            name: 'term',
            typeInfo: '.TTerm'
          }, {
            name: 'repaymentDate',
            typeInfo: '.TRepaymentDate'
          }, {
            name: 'repaymentIfWeekend',
            typeInfo: '.TRepaymentIfWeekend'
          }, {
            name: 'firstRepaymentAmountAndTerm',
            typeInfo: '.TFirstRepaymentAmountAndTerm'
          }, {
            name: 'nthRepaymentAmountAndTerms',
            typeInfo: '.TNthRepaymentAmountAndTerms'
          }, {
            name: 'lastRepaymentAmountAndTerm',
            typeInfo: '.TLastRepaymentAmountAndTerm'
          }, {
            name: 'fines',
            typeInfo: '.TFines'
          }]
      }, {
        localName: 'TOffline',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TOffline'
        },
        propertyInfos: [{
            name: 'offlineUIN',
            required: true,
            elementName: {
              localPart: 'offlineUIN',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Boolean'
          }, {
            name: 'altPayerIdentifier',
            required: true,
            elementName: {
              localPart: 'altPayerIdentifier',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'unifiedPayerIdentifier',
            required: true,
            elementName: {
              localPart: 'unifiedPayerIdentifier',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }]
      }, {
        localName: 'TAreaPhysicalValue',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TAreaPhysicalValue'
        },
        baseTypeInfo: '.TPhysicalValue'
      }, {
        localName: 'TDebtRepaymentPlan',
        baseTypeInfo: '.TBaseDebtRepaymentPlan'
      }, {
        localName: 'TObjectPhysicalProperties',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectPhysicalProperties'
        },
        propertyInfos: [{
            name: 'property',
            required: true,
            collection: true,
            elementName: {
              localPart: 'property',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
            },
            typeInfo: '.TPhysicalValue'
          }]
      }, {
        localName: 'TDemands',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: '.TCostType'
          }, {
            name: 'volumeDemands',
            required: true,
            typeInfo: '.TVolumeDemands'
          }, {
            name: 'demand',
            typeInfo: '.TDemand'
          }]
      }, {
        localName: 'TDduKey',
        propertyInfos: [{
            name: 'numberDdu',
            required: true
          }, {
            name: 'issueDate',
            required: true,
            typeInfo: 'Date'
          }]
      }, {
        localName: 'TRepaymentTermLastPayment',
        propertyInfos: [{
            name: 'repaymentTermLastPayment',
            required: true,
            typeInfo: '.TEmpty'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TPaymentDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TPaymentDocument'
        },
        baseTypeInfo: '.TStrictDocument',
        propertyInfos: [{
            name: 'supplierBillId',
            elementName: {
              localPart: 'supplierBillId',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'amount',
            required: true,
            elementName: {
              localPart: 'amount',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Long'
          }, {
            name: 'oktmo',
            elementName: {
              localPart: 'OKTMO',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'bic',
            elementName: {
              localPart: 'BIC',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'bankName',
            elementName: {
              localPart: 'bankName',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'settlementAccount',
            elementName: {
              localPart: 'settlementAccount',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'payerFullName',
            elementName: {
              localPart: 'payerFullName',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'idPayers',
            required: true,
            elementName: {
              localPart: 'idPayers',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.IdPayersType'
          }, {
            name: 'offline',
            elementName: {
              localPart: 'offline',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TOffline'
          }]
      }, {
        localName: 'TDebtorAgreement',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TDebtorAgreement'
        },
        propertyInfos: [{
            name: 'debtor',
            required: true,
            collection: true,
            elementName: {
              localPart: 'debtor',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TAgreementSubject'
          }]
      }, {
        localName: 'TEstrangementTerms',
        propertyInfos: [{
            name: 'rights',
            required: true
          }, {
            name: 'additionalTerms',
            required: true
          }]
      }, {
        localName: 'TAmount',
        propertyInfos: [{
            name: 'calculated',
            required: true
          }, {
            name: 'payment',
            required: true,
            typeInfo: '.TCostType'
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TDependencies',
        propertyInfos: [{
            name: 'dependency',
            required: true
          }, {
            name: 'noDependencies',
            required: true,
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TLegalActMIV',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TLegalActMIV'
        },
        baseTypeInfo: '.TLegalAct'
      }, {
        localName: 'TAddressCityBorder',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressCityBorder'
        },
        baseTypeInfo: '.TAddressCity'
      }, {
        localName: 'TAgreementSubject',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TAgreementSubject'
        },
        baseTypeInfo: '.TMgSubject',
        propertyInfos: [{
            name: 'modification',
            required: true,
            elementName: {
              localPart: 'modification',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TIdAppliedDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TIdAppliedDocument'
        },
        baseTypeInfo: '.TIdDocumentRestr'
      }, {
        localName: 'TPowerOfAttorneyApplied',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TPowerOfAttorneyApplied'
        },
        baseTypeInfo: '.TPowerOfAttorneyRestr'
      }, {
        localName: 'TAccrualBase',
        propertyInfos: [{
            name: 'accrualBaseList',
            required: true
          }, {
            name: 'otherDescription',
            required: true
          }]
      }, {
        localName: 'TContactInfo',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TContactInfo'
        },
        propertyInfos: [{
            name: 'phoneNumber',
            elementName: {
              localPart: 'phoneNumber',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }, {
            name: 'postalAddress',
            elementName: {
              localPart: 'postalAddress',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            },
            typeInfo: '.TAddress'
          }, {
            name: 'email',
            elementName: {
              localPart: 'email',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects'
            }
          }]
      }, {
        localName: 'TCostType',
        propertyInfos: [{
            name: 'amount',
            required: true,
            typeInfo: 'Decimal'
          }, {
            name: 'currency',
            required: true
          }]
      }, {
        localName: 'TDepositoryAccountingDelete',
        propertyInfos: [{
            name: 'nomineeDep',
            typeInfo: '.TEmpty'
          }, {
            name: 'nomineeAccountNum',
            typeInfo: '.TEmpty'
          }]
      }, {
        localName: 'TBaseObligation',
        propertyInfos: [{
            name: 'contractsInfo',
            typeInfo: '.TContractsInfo'
          }, {
            name: 'loanAmount',
            typeInfo: '.TLoanAmount'
          }]
      }, {
        localName: 'TMapPlanDocumentApplied',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TMapPlanDocumentApplied'
        },
        baseTypeInfo: '.TMapPlanDocumentRestr'
      }, {
        localName: 'TObjectMarkNote',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject',
          localPart: 'TObjectMarkNote'
        },
        baseTypeInfo: '.TSomeObjectNote'
      }, {
        localName: 'TAddressCity',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressCity'
        },
        baseTypeInfo: '.TAddressCityBase'
      }, {
        localName: 'TDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TDocument'
        },
        propertyInfos: [{
            name: 'documentTypes',
            minOccurs: 0,
            maxOccurs: 2,
            collection: true,
            elementName: {
              localPart: 'documentTypes',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.DocumentTypes'
          }, {
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'number',
            elementName: {
              localPart: 'number',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            }
          }, {
            name: 'issueDate',
            elementName: {
              localPart: 'issueDate',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: 'Date'
          }, {
            name: 'attachment',
            elementName: {
              localPart: 'attachment',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TAttachment'
          }, {
            name: 'notes',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'notes',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TNote'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TRepaymentDay',
        propertyInfos: [{
            name: 'day',
            required: true
          }, {
            name: 'payPeriod',
            required: true
          }]
      }, {
        type: 'enumInfo',
        localName: 'DApartment',
        values: ['\u043A\u0432', '\u0431\u043E\u043A\u0441', '\u043A\u043E\u043C', '\u043F\u043E\u043C']
      }, {
        type: 'enumInfo',
        localName: 'DOKV',
        values: ['ALL', 'DZD', 'ARS', 'AUD', 'BSD', 'BHD', 'BDT', 'AMD', 'BBD', 'BMD', 'BTN', 'BOB', 'BWP', 'BZD', 'SBD', 'BND', 'MMK', 'BIF', 'KHR', 'CAD', 'CVE', 'KYD', 'LKR', 'CLP', 'CNY', 'COP', 'KMF', 'CRC', 'HRK', 'CUP', 'CZK', 'DKK', 'DOP', 'SVC', 'ETB', 'ERN', 'EEK', 'FKP', 'FJD', 'DJF', 'GMD', 'GIP', 'GTQ', 'GNF', 'GYD', 'HTG', 'HNL', 'HKD', 'HUF', 'ISK', 'INR', 'IDR', 'IRR', 'IQD', 'ILS', 'JMD', 'JPY', 'KZT', 'JOD', 'KES', 'KPW', 'KRW', 'KWD', 'KGS', 'LAK', 'LBP', 'LSL', 'LRD', 'LYD', 'MOP', 'MWK', 'MYR', 'MVR', 'MRO', 'MUR', 'MXN', 'MNT', 'MDL', 'MAD', 'OMR', 'NAD', 'NPR', 'ANG', 'AWG', 'VUV', 'NZD', 'NIO', 'NGN', 'NOK', 'PKR', 'PAB', 'PGK', 'PYG', 'PEN', 'PHP', 'GWP', 'QAR', 'RUB', 'RWF', 'SHP', 'STD', 'SAR', 'SCR', 'SLL', 'SGD', 'VND', 'SOS', 'ZAR', 'SSP', 'SZL', 'SEK', 'CHF', 'SYP', 'THB', 'TOP', 'TTD', 'AED', 'TND', 'TMM', 'UGX', 'MKD', 'EGP', 'GBP', 'TZS', 'USD', 'UYU', 'UZS', 'WST', 'YER', 'TWD', 'CUC', 'ZWL', 'BYN', 'TMT', 'GHS', 'VEF', 'SDG', 'UYI', 'RSD', 'MZN', 'AZN', 'RON', 'TRY', 'XAF', 'EUR', 'UAH', 'GEL', 'PLN', 'BRL', 'XCD', 'XOF', 'XPF', 'XDR', 'ZMW', 'SRD', 'MGA', 'COU', 'AFN', 'TJS', 'AOA', 'BYR', 'BGN', 'CDF', '\u0412\u0410\u041C']
      }, {
        type: 'enumInfo',
        localName: 'DTimeUnits',
        values: ['day', 'week', 'month', 'quarter']
      }, {
        type: 'enumInfo',
        localName: 'DTimeUnitsMQY',
        values: ['month', 'quarter', 'year']
      }, {
        type: 'enumInfo',
        localName: 'DBaseTimeUnits',
        values: ['day', 'week', 'month', 'quarter', 'year']
      }, {
        type: 'enumInfo',
        localName: 'DHouse',
        values: ['\u0434', '\u043A', '\u0441\u0442\u0440', '\u0441\u0440\u0436', '\u0432\u043B\u0434', '\u0434\u0432\u043B\u0434', '\u0413\u0421\u041A', '\u0433\u0430\u0440\u0430\u0436', '\u043A\u0430\u0437\u0430\u0440\u043C\u0430', '\u0443\u0447-\u043A', '\u0431\u043E\u043A\u0441', '\u0432\/\u0447', '\u0431\u043B\u043E\u043A', '\u043B\u0438\u0442\u0435\u0440\u0430']
      }, {
        type: 'enumInfo',
        localName: 'DTimeUnitsDY',
        values: ['year', 'day']
      }, {
        type: 'enumInfo',
        localName: 'SGender',
        values: ['male', 'female']
      }, {
        type: 'enumInfo',
        localName: 'DObjectNoteType',
        values: ['pif', 'mortgage', 'mortgageOwner', 'note', 'usagePurpose', 'housingPurpose', 'roomPurpose', 'definitionMP', 'inventoryNum', 'floor', 'pik', 'oldCadastralNumber']
      }, {
        type: 'enumInfo',
        localName: 'DSubjectAgreement',
        values: ['add', 'edit', 'delete', 'unchanged']
      }, {
        type: 'enumInfo',
        localName: 'DRegularityList',
        values: ['month', 'day']
      }],
    elementInfos: [{
        elementName: 'electronicMortgage',
        typeInfo: '.TElectronicMortgage'
      }, {
        elementName: {
          localPart: 'object',
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TObject'
        },
        typeInfo: '.TEGRNRequestObject'
      }, {
        elementName: 'agreementAmendments',
        typeInfo: '.TAgreementAmendments'
      }]
  };
  return {
    Mortgage: Mortgage
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Mortgage_Module_Factory);
}
else {
  var Mortgage_Module = Mortgage_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Mortgage = Mortgage_Module.Mortgage;
  }
  else {
    var Mortgage = Mortgage_Module.Mortgage;
  }
}