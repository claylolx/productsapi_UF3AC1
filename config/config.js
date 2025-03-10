require('dotenv').config(); // Cargar variables de entorno

module.exports = {
  mongoURI: process.env.MONGO_URI || "fallback_value_if_env_missing"
};
