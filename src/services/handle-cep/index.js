import ViacepApi from '../../client/viacep/index.js';
import BitrixpApi from '../../client/bitrix/index.js';
import logger from '../../utils/logger/index.js';
import leadAddressFields from '../builder/lead-address-fields.js';

const viacepApi = new ViacepApi();
const bitrixpApi = new BitrixpApi();

const handleCep = async (id, cep) => {
  const cepData = await viacepApi.searchCep(cep);
  if (!cepData) {
    logger.error(`Error searching cep: ${cep}.`);
    return;
  }

  logger.info(`Cep: ${cep} successfully searched.`);

  const crmAddress = leadAddressFields(cepData);

  let crmQueryString = Object.keys(crmAddress).reduce((acc, key) => {
    return `${acc}&fields[${key}]=${crmAddress[key]}`;
  }, '');

  crmQueryString = `ID=${id}${crmQueryString}`;

  const { result } = await bitrixpApi.updateLead(crmQueryString);
  if (!result) {
    logger.error(`Error updating lead: ${cep}.`);
    return;
  }

  return true;
};

export default handleCep;
