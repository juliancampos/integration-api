import HealthStatusController from '../controllers/health-status/health-status-controller.js';

const healthStatusController = new HealthStatusController();

const healthStatus = (router) => {
  router.get('/health-status', healthStatusController.healthStatus);
};

export default healthStatus;
