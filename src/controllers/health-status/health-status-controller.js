class HealthStatusController {

  healthStatus(req, res) {
    const result = {
      status: 'OK',
      message: 'Servidor funcionando normalmente',
      timestamp: new Date().toISOString()
    }    
    return res.status(200).json(result);
  };
};

export default HealthStatusController;
