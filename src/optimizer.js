const config = require('./config');

class YMSOptimizer {
    constructor() {
        this.colaTransportes = [];
    }

    // Registrar llegada de camión
    registrarArribo(id, tipo, horaLlegada) {
        this.colaTransportes.push({ id, tipo, horaLlegada: new Date(horaLlegada) });
    }

    // Algoritmo de Priorización: Perecederos primero, luego por orden de llegada (FIFO)
    obtenerSiguienteAsignacion() {
        return this.colaTransportes.sort((a, b) => {
            // Regla 1: Prioridad por tipo de carga
            if (a.tipo === config.negocio.PRIORIDAD_A && b.tipo !== config.negocio.PRIORIDAD_A) {
                return -1;
            }
            if (a.tipo !== config.negocio.PRIORIDAD_A && b.tipo === config.negocio.PRIORIDAD_A) {
                return 1;
            }
            // Regla 2: FIFO (Tiempo de arribo)
            return a.horaLlegada - b.horaLlegada;
        });
    }
}

module.exports = YMSOptimizer;

