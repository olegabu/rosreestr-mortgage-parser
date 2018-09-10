var TRequest_Module_Factory = function () {
  var TRequest = {
    name: 'TRequest',
    defaultElementNamespaceURI: 'http:\/\/rosreestr.ru\/services\/v0.1\/commonsMortgage\/TRequest',
    typeInfos: [{
        localName: 'TRequest',
        propertyInfos: [{
            name: 'mortgageFile',
            required: true,
            typeInfo: '.TMortgageFile'
          }, {
            name: 'file',
            minOccurs: 0,
            collection: true,
            typeInfo: '.TFile'
          }]
      }, {
        localName: 'TFile',
        propertyInfos: [{
            name: 'fileName',
            required: true
          }]
      }, {
        localName: 'TMortgageFile',
        baseTypeInfo: '.TFile'
      }],
    elementInfos: [{
        elementName: 'request',
        typeInfo: '.TRequest'
      }]
  };
  return {
    TRequest: TRequest
  };
};
if (typeof define === 'function' && define.amd) {
  define([], TRequest_Module_Factory);
}
else {
  var TRequest_Module = TRequest_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.TRequest = TRequest_Module.TRequest;
  }
  else {
    var TRequest = TRequest_Module.TRequest;
  }
}