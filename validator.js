SchemaValidator = require('libxmljs');

module.exports = class Validator {

    validate (data, xsd) {
        const res = {};
        const xsdDoc = SchemaValidator.parseXmlString(xsd);
        const dataDoc = SchemaValidator.parseXmlString(data);

        res.doctype = "";
        res.status = dataDoc.validate(xsdDoc);

        return res;
    };
};