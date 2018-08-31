const fs = require('fs');

const mortgageParser = new (require('./../index').MortgageParser)();

// ZipFile
let data = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_4.zip');
let res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_2.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_3.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/case_directionAgreement_2.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/case_directionAgreement_1.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_1.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/case_checkingInformationOwner_1.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);


// ZipFile
data = fs.readFileSync('./test/cases/case_NoticeRedemption_1.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);

// ZipFile
data = fs.readFileSync('./test/cases/case_transferElectronicMortgageDepositary_1.zip');
res = mortgageParser.parseZip(data, '0');
console.log(res);




// DataUrl
data = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_dataUrl_1.txt', 'utf8');
res = mortgageParser.parseZip(data, '1');
console.log(res);