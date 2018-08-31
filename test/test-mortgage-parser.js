const fs = require('fs');
const mortgageParser = new (require('./../index').MortgageParser)();
const CASE_DIR = './test/cases/';

// File pattern description: case_<request.requestType>_<caseNum>.<fileExtension>

console.log('Begin tests!');

fs.readdirSync(CASE_DIR).forEach(fileName => {
    if (fileName.match(/(^case)(_\w*_)\d*\.(zip|txt)$/igms)) {
        const fileData = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_4.zip');
        const fileResultParse = mortgageParser.parseZip(fileData, '0');
        console.log(fileResultParse);
    }
    else {
        console.log('Incorrect test case file name: ' + fileName);
    }
});

// DataUrl
data = fs.readFileSync('./test/cases/case_noticeReleaseMortgage_dataUrl_1.txt', 'utf8');
res = mortgageParser.parseZip(data, '1');
console.log(res);