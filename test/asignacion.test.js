const YMSOptimizer = require('../src/optimizer');

test('Debe priorizar perecederos sobre secos aunque lleguen después', () => {
    const optimizer = new YMSOptimizer();
    
    // El seco llega primero (10:00 AM)
    optimizer.registrarArribo('TRK-SECO', 'seco', '2023-10-27T10:00:00');
    // El perecedero llega después (10:30 AM)
    optimizer.registrarArribo('TRK-PERECEDERO', 'perecedero', '2023-10-27T10:30:00');

    const resultado = optimizer.obtenerSiguienteAsignacion();

    // El primer elemento en la lista debe ser el perecedero
    expect(resultado[0].id).toBe('TRK-PERECEDERO');
});

test('Debe respetar el orden FIFO si ambos son del mismo tipo', () => {
    const optimizer = new YMSOptimizer();
    
    optimizer.registrarArribo('TRK-1', 'seco', '2023-10-27T09:00:00');
    optimizer.registrarArribo('TRK-2', 'seco', '2023-10-27T08:00:00');

    const resultado = optimizer.obtenerSiguienteAsignacion();

    // TRK-2 debe ir primero porque llegó a las 08:00 AM
    expect(resultado[0].id).toBe('TRK-2');
});
