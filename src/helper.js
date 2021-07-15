export function calcularMonto(monto) {
    let incremento;
    switch (monto){
        case 'poco': 
            incremento = 1.3;
            break;
        case 'medio':
            incremento = 1.15;
            break;
        case 'mucho':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
};

export function obtenerRiesgo(riesgo) {
    return (riesgo === 'poco') ? 1.2 : 1.5;
};


