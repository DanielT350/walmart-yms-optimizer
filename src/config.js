
// Configuración centralizada de reglas de negocio
require('dotenv').config();

const config = {
    api: {
        url: process.env.YMS_API_URL || 'http://localhost:3000',
        token: process.env.YMS_AUTH_TOKEN || 'dev-token-cuautitlan'
    },
    negocio: {
        TIEMPO_MAX_ESPERA: 120, // minutos
        PRIORIDAD_A: 'perecedero',
        PRIORIDAD_B: 'seco'
    },
    db: {
        host: process.env.DB_HOST || 'localhost'
    }
};

module.exports = config;
