/* NEVER COMMIT REAL SETTINGS FILE TO GITHUB */

const SECRET_SETTINGS = {
  PORT: null, // server port
  USE_SSL: false, // true if using SSL
  KEY_PATH: null, // path to SSL private key
  CERTIFICATE_PATH: null, // path to SSL certificate
  CA_PATH: null // path to CA certificate
};

module.exports = SECRET_SETTINGS;
