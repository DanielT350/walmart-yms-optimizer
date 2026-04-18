const YMSOptimizer = require('./optimizer');
const optimizer = new YMSOptimizer();

console.log("--- Walmart YMS Optimizer: Nodo Cuautitlán ---");
console.log("Simulando arribo de transportes...");

// Simulando datos
optimizer.registrarArribo('TRK-001', 'seco', '2023-10-27T10:00:00');
optimizer.registrarArribo('TRK-002', 'perecedero', '2023-10-27T10:30:00'); // Llegó después pero es perecedero
optimizer.registrarArribo('TRK-003', 'seco', '2023-10-27T09:45:00');

const ordenAsignacion = optimizer.obtenerSiguienteAsignacion();

console.log("\nOrden de Asignación de Rampas:");
ordenAsignacion.forEach((unidad, index) => {
    console.log(`${index + 1}. ID: ${unidad.id} | Tipo: ${unidad.tipo.toUpperCase()} | Llegada: ${unidad.horaLlegada.toLocaleTimeString()}`);
});

