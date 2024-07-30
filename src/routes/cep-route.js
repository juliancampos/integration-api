import CepController from '../controllers/cep/cep-controller.js';

const cepController = new CepController();

const cepRoute = (router) => {
  router.get('/cep/:cep', cepController.searchCep);
  router.post('/cep', cepController.handleSearchCep);
};

export default cepRoute;
