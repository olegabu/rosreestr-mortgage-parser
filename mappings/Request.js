var Request_Module_Factory = function () {
  var Request = {
    name: 'Request',
    defaultElementNamespaceURI: 'urn:\/\/x-artefacts-rosreestr-gov-ru\/virtual-services\/electronic-mortgage\/1.0.0',
    typeInfos: [{
        localName: 'TIdDocumentRestr',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TIdDocumentRestr'
        },
        baseTypeInfo: '.TDocumentWithNumber'
      }, {
        localName: 'AppliedMapPlanDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedMapPlanDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'ChangeNotificationType',
        baseTypeInfo: '.ObtainingStatusNoticeType',
        propertyInfos: [{
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }, {
            name: 'dateReceiptAgreement',
            elementName: 'DateReceiptAgreement',
            typeInfo: 'Date'
          }]
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
            name: 'id',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: '_id'
            },
            type: 'attribute'
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
        localName: 'TAppliedDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TAppliedDocument'
        },
        baseTypeInfo: '.TDocument'
      }, {
        localName: 'TPerson',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TPerson'
        },
        baseTypeInfo: '.TBasicPerson'
      }, {
        localName: 'NoticeReleaseMortgageType',
        propertyInfos: [{
            name: 'informationAddedEGRN',
            required: true,
            elementName: 'InformationAddedEGRN'
          }, {
            name: 'dateMortgage',
            required: true,
            elementName: 'DateMortgage',
            typeInfo: 'Date'
          }, {
            name: 'attachmentDescription',
            required: true,
            elementName: 'AttachmentDescription',
            typeInfo: '.AttachmentDescriptionType'
          }, {
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }]
      }, {
        localName: 'TAddressRegion',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressRegion'
        },
        baseTypeInfo: '.TAddressCity'
      }, {
        localName: 'OperationResponseType',
        propertyInfos: [{
            name: 'transferElectronicMortgage',
            required: true,
            elementName: 'TransferElectronicMortgage',
            typeInfo: '.TransferElectronicMortgageResponseType'
          }, {
            name: 'transferAgreement',
            required: true,
            elementName: 'TransferAgreement',
            typeInfo: '.TransferAgreementResponseType'
          }, {
            name: 'noticeRedemption',
            required: true,
            elementName: 'NoticeRedemption',
            typeInfo: '.NoticeRedemptionResponseType'
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
        localName: 'NoticeOwnerType',
        baseTypeInfo: '.ObtainingStatusNoticeType',
        propertyInfos: [{
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }, {
            name: 'noDepositAccounts',
            required: true,
            elementName: 'NoDepositAccounts',
            typeInfo: '.NoDepositAccountsType'
          }, {
            name: 'firstOwners',
            required: true,
            typeInfo: '.TFirstOwner'
          }]
      }, {
        localName: 'TAddressCity',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressCity'
        },
        baseTypeInfo: '.TAddressCityBase'
      }, {
        localName: 'TransferElectronicMortgageType',
        propertyInfos: [{
            name: 'transferElectronicMortgageDepositary',
            required: true,
            elementName: 'TransferElectronicMortgageDepositary',
            typeInfo: '.TransferElectronicMortgageDepositaryType'
          }, {
            name: 'noticeReleaseMortgage',
            required: true,
            elementName: 'NoticeReleaseMortgage',
            typeInfo: '.NoticeReleaseMortgageType'
          }]
      }, {
        localName: 'TNativeParamsDepositary',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TNativeParamsDepositary'
        },
        baseTypeInfo: '.TBaseNativeForeignParams'
      }, {
        localName: 'TIdAppliedDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TIdAppliedDocument'
        },
        baseTypeInfo: '.TIdDocumentRestr'
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
        localName: 'TDocumentSeries',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TDocumentSeries'
        },
        baseTypeInfo: '.TStrictDocument'
      }, {
        localName: 'TransferElectronicMortgageDepositaryType',
        propertyInfos: [{
            name: 'receivedDate',
            required: true,
            elementName: 'ReceivedDate',
            typeInfo: 'Date'
          }, {
            name: 'attachmentDescription',
            required: true,
            elementName: 'AttachmentDescription',
            typeInfo: '.AttachmentDescriptionType'
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
              localPart: 'NameAuthority',
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
        localName: 'NoticeRedemptionResponseType',
        baseTypeInfo: '.ObtainingStatusNoticeType',
        propertyInfos: [{
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }]
      }, {
        localName: 'TAddressElement2',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement2'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'AttachmentDescriptionType',
        propertyInfos: [{
            name: 'attachmentFSLink',
            required: true,
            elementName: 'AttachmentFSLink'
          }, {
            name: 'isMTOMAttachmentContent',
            required: true,
            elementName: 'IsMTOMAttachmentContent',
            typeInfo: 'Boolean'
          }, {
            name: 'attachmentFormat',
            required: true,
            elementName: 'AttachmentFormat',
            typeInfo: '.StructuredAttachmentFormatType'
          }, {
            name: 'attachmentSignatureFSLink',
            elementName: 'AttachmentSignatureFSLink'
          }, {
            name: 'fileName',
            required: true,
            elementName: 'FileName'
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
        localName: 'TMgSubjectFirstOwner',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TMgSubjectFirstOwner'
        },
        baseTypeInfo: '.TBasicMgSubject'
      }, {
        localName: 'ObtainingStatusNoticeReleaseMortgageResponseType',
        baseTypeInfo: '.ObtainingStatusNoticeReleaseMortgageType',
        propertyInfos: [{
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }]
      }, {
        localName: 'TBasicSomeDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TBasicSomeDocument'
        },
        propertyInfos: [{
            name: 'idDocument',
            elementName: {
              localPart: 'idDocument',
              namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents'
            },
            typeInfo: '.TIdDocumentRestr'
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
        localName: 'DirectionAgreementType',
        propertyInfos: [{
            name: 'dateMortgage',
            required: true,
            elementName: 'DateMortgage',
            typeInfo: 'Date'
          }, {
            name: 'attachmentDescription',
            required: true,
            elementName: 'AttachmentDescription',
            typeInfo: '.AttachmentDescriptionType'
          }, {
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }]
      }, {
        localName: 'TBasicRequestDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TBasicRequestDocument'
        },
        baseTypeInfo: '.TBasicStrictDocument'
      }, {
        localName: 'TSomeAppliedDocuments',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TSomeAppliedDocuments'
        },
        baseTypeInfo: '.TBasicSomeDocument'
      }, {
        localName: 'RequestType',
        propertyInfos: [{
            name: 'routingCode',
            required: true,
            elementName: 'RoutingCode'
          }, {
            name: 'cadastralNumbers',
            required: true,
            elementName: 'CadastralNumbers',
            typeInfo: '.CadastralNumbersType'
          }, {
            name: 'operation',
            required: true,
            elementName: 'Operation',
            typeInfo: '.OperationRequestType'
          }]
      }, {
        localName: 'TransferAgreementType',
        propertyInfos: [{
            name: 'checkingInformationOwner',
            required: true,
            elementName: 'CheckingInformationOwner',
            typeInfo: '.CheckingInformationOwnerType'
          }, {
            name: 'directionAgreement',
            required: true,
            elementName: 'DirectionAgreement',
            typeInfo: '.DirectionAgreementType'
          }]
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
        localName: 'CadastralNumbersType',
        propertyInfos: [{
            name: 'cadastralNumber',
            required: true,
            collection: true,
            elementName: 'CadastralNumber'
          }]
      }, {
        localName: 'NoDepositAccountsType',
        propertyInfos: [{
            name: 'noDepositAccount',
            required: true,
            collection: true,
            elementName: 'NoDepositAccount',
            typeInfo: '.NoDepositAccountType'
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
        localName: 'AppliedLegalActDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedLegalActDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
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
        localName: 'NoDepositAccountType',
        propertyInfos: [{
            name: 'person',
            required: true,
            typeInfo: '.TFIO'
          }, {
            name: 'name',
            required: true
          }]
      }, {
        localName: 'TStrictDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TStrictDocument'
        },
        baseTypeInfo: '.TBasicStrictDocument'
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
        localName: 'ResponseType',
        propertyInfos: [{
            name: 'cadastralNumbers',
            required: true,
            elementName: 'CadastralNumbers',
            typeInfo: '.CadastralNumbersType'
          }, {
            name: 'operation',
            required: true,
            elementName: 'Operation',
            typeInfo: '.OperationResponseType'
          }]
      }, {
        localName: 'TAddressCityBorder',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressCityBorder'
        },
        baseTypeInfo: '.TAddressCity'
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
        localName: 'ObtainingStatusNoticeType',
        propertyInfos: [{
            name: 'status',
            required: true,
            elementName: 'Status',
            typeInfo: 'Boolean'
          }, {
            name: 'comment',
            required: true,
            elementName: 'Comment'
          }]
      }, {
        localName: 'TAddressElement1',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement1'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'AppliedLegalActDocumentMIVTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedLegalActDocumentMIVTypes'
        },
        baseTypeInfo: '.DocumentTypes'
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
        localName: 'TSomeDocument',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TSomeDocument'
        },
        baseTypeInfo: '.TBasicSomeDocument'
      }, {
        localName: 'ObtainingStatusNoticeReleaseMortgageType',
        baseTypeInfo: '.NoticeReceiptMortgageBaseType'
      }, {
        localName: 'TNativeForeignParams',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Subjects',
          localPart: 'TNativeForeignParams'
        },
        baseTypeInfo: '.TBaseNativeForeignParams'
      }, {
        localName: 'TAddressElement4Street',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement4Street'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'TDocumentWithNumber',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'TDocumentWithNumber'
        },
        baseTypeInfo: '.TStrictDocument'
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
        localName: 'StructuredAttachmentFormatType',
        propertyInfos: [{
            name: 'isUnstructuredFormat',
            required: true,
            elementName: 'IsUnstructuredFormat',
            typeInfo: 'Boolean'
          }, {
            name: 'isZippedPacket',
            required: true,
            elementName: 'IsZippedPacket',
            typeInfo: 'Boolean'
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
        localName: 'NoticeReceiptMortgageBaseType',
        baseTypeInfo: '.ObtainingStatusNoticeType',
        propertyInfos: [{
            name: 'dateDepository',
            elementName: 'DateDepository',
            typeInfo: 'Date'
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
        localName: 'TAddressLocality',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressLocality'
        },
        baseTypeInfo: '.TAddressCity'
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
        localName: 'CheckingInformationOwnerType',
        propertyInfos: [{
            name: 'firstOwners',
            required: true,
            elementName: 'FirstOwners',
            typeInfo: '.TFirstOwner'
          }, {
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }]
      }, {
        localName: 'AppliedPaymentDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedPaymentDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'TransferAgreementResponseType',
        propertyInfos: [{
            name: 'noticeOwner',
            required: true,
            elementName: 'NoticeOwner',
            typeInfo: '.NoticeOwnerType'
          }, {
            name: 'changeNotification',
            required: true,
            elementName: 'ChangeNotification',
            typeInfo: '.ChangeNotificationType'
          }]
      }, {
        localName: 'AppliedOtherDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedOtherDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
      }, {
        localName: 'NoticeRedemptionType',
        propertyInfos: [{
            name: 'maturityDate',
            required: true,
            elementName: 'MaturityDate',
            typeInfo: 'Date'
          }, {
            name: 'mortgageNumber',
            required: true,
            elementName: 'MortgageNumber'
          }]
      }, {
        localName: 'TransferElectronicMortgageResponseType',
        propertyInfos: [{
            name: 'noticeReceiptMortgage',
            required: true,
            elementName: 'NoticeReceiptMortgage',
            typeInfo: '.NoticeReceiptMortgageBaseType'
          }, {
            name: 'obtainingStatusNoticeReleaseMortgage',
            required: true,
            elementName: 'ObtainingStatusNoticeReleaseMortgage',
            typeInfo: '.ObtainingStatusNoticeReleaseMortgageResponseType'
          }]
      }, {
        localName: 'OperationRequestType',
        propertyInfos: [{
            name: 'transferElectronicMortgage',
            required: true,
            elementName: 'TransferElectronicMortgage',
            typeInfo: '.TransferElectronicMortgageType'
          }, {
            name: 'transferAgreement',
            required: true,
            elementName: 'TransferAgreement',
            typeInfo: '.TransferAgreementType'
          }, {
            name: 'noticeRedemption',
            required: true,
            elementName: 'NoticeRedemption',
            typeInfo: '.NoticeRedemptionType'
          }]
      }, {
        localName: 'TAddressElement4',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement4'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'TAddressElement3',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Address',
          localPart: 'TAddressElement3'
        },
        baseTypeInfo: '.TAddressElement'
      }, {
        localName: 'AppliedIdDocumentTypes',
        typeName: {
          namespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/Documents',
          localPart: 'AppliedIdDocumentTypes'
        },
        baseTypeInfo: '.DocumentTypes'
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
        type: 'enumInfo',
        localName: 'DHouse',
        values: ['\u0434', '\u043A', '\u0441\u0442\u0440', '\u0441\u0440\u0436', '\u0432\u043B\u0434', '\u0434\u0432\u043B\u0434', '\u0413\u0421\u041A', '\u0433\u0430\u0440\u0430\u0436', '\u043A\u0430\u0437\u0430\u0440\u043C\u0430', '\u0443\u0447-\u043A', '\u0431\u043E\u043A\u0441', '\u0432\/\u0447', '\u0431\u043B\u043E\u043A', '\u043B\u0438\u0442\u0435\u0440\u0430']
      }, {
        type: 'enumInfo',
        localName: 'DApartment',
        values: ['\u043A\u0432', '\u0431\u043E\u043A\u0441', '\u043A\u043E\u043C', '\u043F\u043E\u043C']
      }, {
        type: 'enumInfo',
        localName: 'SGender',
        values: ['male', 'female']
      }],
    elementInfos: [{
        elementName: 'Request',
        typeInfo: '.RequestType'
      }, {
        elementName: 'Response',
        typeInfo: '.ResponseType'
      }]
  };
  return {
    Request: Request
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Request_Module_Factory);
}
else {
  var Request_Module = Request_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Request = Request_Module.Request;
  }
  else {
    var Request = Request_Module.Request;
  }
}