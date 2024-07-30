import axios from 'axios';
import logger from '../../utils/logger/index.js';

const {
  CLICKSIGN_BASE_URL,
  CLICKSIGN_PATH_SEARCH_SIGNER
 } = process.env;

class ClicksignApi {
  constructor() {
    this.urlBase = CLICKSIGN_BASE_URL;
    this.pathSearchSigner = CLICKSIGN_PATH_SEARCH_SIGNER;
  }

  async searchSigner(envelopeId) {
    try {
      const path = this.pathSearchSigner.replace(':envelopeId', envelopeId);
      const url = `${this.urlBase}${path}`;
      logger.info(`Signer search url: ${url}`);
      const result = await axios.get(url);
      return result.data; 
    } catch (error) {
      logger.error(error.message)
    }
  }
}

export default ClicksignApi;
