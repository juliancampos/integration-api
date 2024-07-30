import WebhookController from '../controllers/webhook/webhook-controller.js';

const webhookController = new WebhookController();

const webhookRoute = (router) => {
  router.post('/webhook/system/:system', webhookController.handleWebhook);
};

export default webhookRoute;
