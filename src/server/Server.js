import Express from 'express';
import cepRoute from '../routes/cep-route.js';
import webhookRoute from '../routes/webhook-route.js';
import healthStatusRoute from '../routes/health-status-route.js';

import logger from '../utils/logger/index.js';
const {
  PORT,
  npm_package_version: VERSION,
  npm_package_name: SERVICE_NAME
} = process.env;

class Server {
  constructor() {
    this.config();
  };

  config() {
    this.express = Express;
    this.router = Express.Router();
    this.app = this.express();
    this.app.use(this.express.json());
    this.app.use('/api', this.router);

    cepRoute(this.router);
    healthStatusRoute(this.router);
    webhookRoute(this.router);
  };

  start() {
    this.app.listen(PORT, '0.0.0.0', () => {
      logger.info(`${SERVICE_NAME} - Version: ${VERSION}`);
      logger.info(`Listening at port: ${PORT}`);
    });
  };
};

export default Server;
