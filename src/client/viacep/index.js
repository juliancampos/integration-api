import axios from 'axios';
import logger from '../../utils/logger/index.js';

const {
  VIACEP_BASE_URL,
  VIACEP_PATCH_SEARCH_CEP
 } = process.env;

class ViacepApi {
  constructor() {
    this.urlBase = VIACEP_BASE_URL;
    this.pathSearchCep = VIACEP_PATCH_SEARCH_CEP;
  }

  async searchCep(cep) {
    try {
      const path = this.pathSearchCep.replace(':cep', cep);
      const url = `${this.urlBase}${path}`;
      logger.info(`Cep search url: ${url}`);
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      logger.error(`Error searching cep on viacep: ${error}.`);
      throw Error(error.message)
    }
  }
}

export default ViacepApi;
