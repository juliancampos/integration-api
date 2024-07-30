import logger from "../../utils/logger/index.js";
import builderData from "./builder/index.js";

const clicksign = async (data) => {
  const receivedData = builderData(data);
  logger.info(receivedData);
};

export default clicksign;
