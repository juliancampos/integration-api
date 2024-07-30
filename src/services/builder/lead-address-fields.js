const Address = {
  street: 'UF_CRM_1722086471559',
  neighbourhood: 'UF_CRM_1722086666578',
  city: 'UF_CRM_1722035158005',
  state: 'UF_CRM_1722086407580'
}

const leadAddressFields = (data) => ({
  [Address.street]: data.logradouro,
  [Address.neighbourhood]: data.bairro,
  [Address.city]: data.localidade,
  [Address.state]: data.uf
});

export default leadAddressFields;

