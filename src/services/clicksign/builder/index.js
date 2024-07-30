import logger from "../../../utils/logger/index.js";

const builderData = (data) => {
  const { event } = data;
  logger.info(`Event received: ${event.name}`);
  
  const signer = {
    key: event.data.signer.key,
    name: event.data.signer.name,
    email: event.data.signer.email,
    phoneNumber: event.data.signer.phone_number
  };

  return {
    eventName: event.name,
    signer
  };
};

export default builderData;
