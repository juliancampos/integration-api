import ViacepApi from '../../client/viacep/index.js';
import logger from '../../utils/logger/index.js';
import handleCep from '../../services/handle-cep/index.js';

class CepController {

  async searchCep(req, res) {
    try {
      const { cep } = req.params;
      const viacepApi = new ViacepApi();
      const result = await viacepApi.searchCep(cep);
      res.json(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  async handleSearchCep(req, res) {
    try {
      logger.info(JSON.stringify(req.query));
      logger.info(JSON.stringify(req.body));
      const { id, zipCode } = req.query;
      logger.info(`Data received: ${id}, ${zipCode}`);
      await handleCep(id, zipCode);
      return res.sendStatus(204);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

export default CepController;
