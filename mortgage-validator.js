const fs = require('fs');
const Ajv = require('ajv');

const XMLSchemaJsonSchema = JSON.parse(fs.readFileSync('./mappings/XMLSchema.jsonschema').toString());
const JsonixJsonSchema = JSON.parse(fs.readFileSync('./mappings/Jsonix.jsonschema').toString());
const MortgageJsonSchema = JSON.parse(fs.readFileSync('./mappings/Mortgage.jsonschema').toString());
const RequestSchema = JSON.parse(fs.readFileSync('./mappings/Request.jsonschema').toString());
const TRequestJsonSchema = JSON.parse(fs.readFileSync('./mappings/TRequest.jsonschema').toString());

let ajv = new Ajv({
    //schemaId: '$id',
    coerceTypes: true,
    allErrors: true,
    $data: true,
    verbose: true
});

//const metaSchema = require('./node_modules/ajv/lib/refs/json-schema-draft-07.json');
//ajv.addMetaSchema(metaSchema);
ajv.addSchema(XMLSchemaJsonSchema, 'http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#');
ajv.addSchema(JsonixJsonSchema, 'http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema#');
//ajv.addSchema(RequestSchema, 'urn://x-artefacts-rosreestr-gov-ru/virtual-services/electronic-mortgage/1.0.0');
//ajv.addSchema(RequestSchema, 'urn://x-artefacts-rosreestr-gov-ru/virtual-services/electronic-mortgage/1.0.0');
const validate = ajv.compile(MortgageJsonSchema);
const po = JSON.parse(fs.readFileSync("test/mortgage.json").toString());

const valid = validate(po);
console.log(valid);
