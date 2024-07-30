import axios from 'axios';
import logger from '../../utils/logger/index.js';

const { BITRIX_BASE_URL } = process.env;

const leadMethods = {
  UPDATE: 'crm.lead.update'
}

class BitrixApi {
  constructor() {
    this.urlBase = BITRIX_BASE_URL;
  }

  async updateLead(queryString) {
    try {
      const url = `${this.urlBase}/${leadMethods.UPDATE}`;
      logger.info(`Bitrix url: ${url}?${queryString}`);
      const result = await axios.post(`${url}?${queryString}`);
      return result.data;
    } catch (error) {
      logger.error(error.message)
    }
  }
}

export default BitrixApi;
