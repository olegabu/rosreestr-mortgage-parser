const zipParser = require('./zip-parser');

module.exports = class StuffValidator {

    constructor() {
        const signatureMap = {

            // Передача электронной закладной
            'TransferElectronicMortgage':
                {
                    // Передача проекта ЭЗ (рег. Номер закладной отсутствует)
                    'request': '<Operation>/<TransferElectronicMortgage>/<TransferElectronicMortgageDepositary>',

                    // Ответ о возможности приема ЭЗ (соответствие данных о депозитариях)
                    'response': '<Operation>/<TransferElectronicMortgage>/<NoticeReceiptMortgage>'
                },


            'NoticeReleaseMortgage':
            //Уведомление о внесении в регистрационную запись об ипотеке в сведения о залогодержателе сведений о депозитарии, в который электронная закладная передана на хранение

                {
                    // Передача ЭЗ, подтверждение ее выпуска (присвоен рег. Номер)
                    'request': '<Operation>/<TransferElectronicMortgage>/<NoticeReleaseMortgage>',

                    // Подтверждение приема электронной закладной на обслуживание
                    'response': '<Operation>/<TransferElectronicMortgage>/<ObtainingStatusNoticeReleaseMortgage>',
                },

            'CheckingInformationOwner':
            // Запрос о проверке информации о владельце электронной закладной или ином лице, осуществляющем права по электронной закладной
                {
                    // Запрос проверки данных о владельце, направившем соглашение об изменении ЭЗ
                    'request': '<Operation>/<TransferAgreement>/<CheckingInformationOwner>',

                    //  Подтверждение данных владельца
                    'response': '<Operation>/<TransferAgreement>/<NoticeOwner>'
                },

            'DirectionAgreement':
            // Направление соглашения об изменении электронной закладной
                {
                    // Передача соглашения об изменении ЭЗ
                    'request': ' <Operation>/<TransferAgreement>/<DirectionAgreement>',

                    //  Подтверждение приема соглашения об изменении ЭЗ
                    'response': '<Operation>/<TransferAgreement>/<ChangeNotification>'
                },

            'NoticeRedemption':
            // Уведомление о погашении регистрационной записи об ипотеке
                {
                    // Погашение ЭЗ
                    'request': '<Operation>/<NoticeRedemption>',

                    // Подтверждение получения уведомления о погашении
                    'response': '<Operation>/<NoticeRedemption>'
                },

        };
    };

    validate(data) {

    };

    parseIdentity(data) {

    };
};