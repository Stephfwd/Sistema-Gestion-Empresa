const Departamento = require('../Models/Departamento');

let departamentos = [];

const crearDepartamento = (nombre) => {
    const nuevo = new Departamento(nombre);
    departamentos.push(nuevo);
    return nuevo;
};

const obtenerDepartamentos = () => {
    return departamentos;
};

module.exports = {
    crearDepartamento,
    obtenerDepartamentos
};