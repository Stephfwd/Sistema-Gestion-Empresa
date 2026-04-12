const Empleado = require('../Models/Empleado');

let empleados = [];

const crearEmpleado = (nombre, puesto) => {
    const nuevo = new Empleado(nombre, puesto);
    empleados.push(nuevo);
    return nuevo;
};

const obtenerEmpleados = () => {
    return empleados;
};

module.exports = {
    crearEmpleado,
    obtenerEmpleados
};