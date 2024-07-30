import clicksignService from '../clicksign/index.js';

const strategy = {
  clicksign: clicksignService
}

const handleWebhook = (systemIntegration, data) => {
  return strategy[systemIntegration](data);
};

export default handleWebhook;
