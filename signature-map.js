signatureMap = {

    // Передача электронной закладной
    'TransferElectronicMortgage':
        {
            // Передача проекта ЭЗ (рег. Номер закладной отсутствует)
            'requestTags': '<Operation>/<TransferElectronicMortgage>/<TransferElectronicMortgageDepositary>',

            // Ответ о возможности приема ЭЗ (соответствие данных о депозитариях)
            'responseTags': '<Operation>/<TransferElectronicMortgage>/<NoticeReceiptMortgage>'
        },


    'NoticeReleaseMortgage':
    //Уведомление о внесении в регистрационную запись об ипотеке в сведения о залогодержателе сведений о депозитарии, в который электронная закладная передана на хранение

        {
            // Передача ЭЗ, подтверждение ее выпуска (присвоен рег. Номер)
            'requestTags': '<Operation>/<TransferElectronicMortgage>/<NoticeReleaseMortgage>',

            // Подтверждение приема электронной закладной на обслуживание
            'responseTags': '<Operation>/<TransferElectronicMortgage>/<ObtainingStatusNoticeReleaseMortgage>',
        },

    'CheckingInformationOwner':
    // Запрос о проверке информации о владельце электронной закладной или ином лице, осуществляющем права по электронной закладной
        {
            // Запрос проверки данных о владельце, направившем соглашение об изменении ЭЗ
            'requestTags': '<Operation>/<TransferAgreement>/<CheckingInformationOwner>',

            //  Подтверждение данных владельца
            'responseTags': '<Operation>/<TransferAgreement>/<NoticeOwner>'
        },

    'DirectionAgreement':
    // Направление соглашения об изменении электронной закладной
        {
            // Передача соглашения об изменении ЭЗ
            'requestTags': ' <Operation>/<TransferAgreement>/<DirectionAgreement>',

            //  Подтверждение приема соглашения об изменении ЭЗ
            'responseTags': '<Operation>/<TransferAgreement>/<ChangeNotification>'
        },

    'NoticeRedemption':
    // Уведомление о погашении регистрационной записи об ипотеке
        {
            // Погашение ЭЗ
            'requestTags': '<Operation>/<NoticeRedemption>',

            // Подтверждение получения уведомления о погашении
            'responseTags': '<Operation>/<NoticeRedemption>'
        },

};