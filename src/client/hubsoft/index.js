import axios from 'axios';
import logger from '../../utils/logger/index.js';

const {
  HUBSOFT_BASE_URL,
  HUBSOFT_PATH_ADD_CONTRACT
 } = process.env;

class HubSoftApi {
  constructor() {
    this.urlBase = HUBSOFT_BASE_URL;
    this.pathAddContract = HUBSOFT_PATH_ADD_CONTRACT;
  }

  async addContract(data) {
    try {
      const url = `${this.urlBase}${this.pathAddContract}`;
      logger.info(`[hubsoft] Add contract url: ${url}`);
      const result = await axios.post(url, data);
      return result; 
    } catch (error) {
      logger.error(error.message)
    }
  }

  async auth(data) {
    try {
      const url = `${this.urlBase}${this.pathAddContract}`;
      logger.info(`[hubsoft] Request token url: ${url}`);
      const result = await axios.post(url, data);
      return result; 
    } catch (error) {
      logger.error(error.message)
    }
  }
}

export default HubSoftApi;
