// Obtiene la diferencia de años

export function obtenerDiferenciaYear (year) {
    return new Date().getFullYear() - year;
}

// Calcula según el origen del auto, el aumento que hay que impactar

export function calcularMarca (marca) {
    let incremento;
    switch (marca){
        case 'europeo': 
            incremento = 1.3;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
};


// Calcula tel tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.2 : 1.5;
};


// Poner en mayúsculas el tipo y modelo
export function primeraMayuscula (texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
