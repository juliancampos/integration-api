import logger from '../../utils/logger/index.js';
import webhookService from '../../services/webhook/index.js';

class WebhookController {
  async handleWebhook(req, res) {
    try {
      const systemIntegration = req.params.system;
      logger.info(`System integration: ${systemIntegration}`);
      webhookService(systemIntegration, req.body);
      return res.sendStatus(202);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

export default WebhookController;
