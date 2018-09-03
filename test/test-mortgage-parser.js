const fs = require('fs');
const mortgageParser = new (require('./../index').MortgageParser)();
const CASE_DIR = './test/cases/';

// File pattern description: case_<request.requestType>_<caseNum>.<fileExtension>

console.log('Begin tests: ');

fs.readdirSync(CASE_DIR).forEach(fileName => {
    //fileName = 'case_directionAgreement_1.zip';
    if (fileName.match(/(^case)(_\w*_)\d*\.(zip)$/igms)) {
        const fileData = fs.readFileSync('./test/cases/' + fileName);
        const fileResultParse = mortgageParser.parseZip(fileData, '0');

        console.log('\n<----->');
        console.log('Case: ' + fileName);
        console.log(fileResultParse.request.requestType);
        console.log(fileResultParse.payload);
    }
    else {
        //console.log('Incorrect test case file name: ' + fileName);
    }
});

// DataUrl
data = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_dataUrl_1.txt', 'utf8');
res = mortgageParser.parseZip(data, '1');
console.log(res);
