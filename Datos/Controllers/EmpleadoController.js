const Empleado = require('../models/Empleado');

// simulación de almacenamiento en memoria
let empleados = [];


// Controlador para crear un nuevo empleado

exports.crearEmpleado = (req, res) => {
    const { nombre, puesto } = req.body;

    const nuevoEmpleado = new Empleado(nombre, puesto);

    // simulamos inserción de datos
    empleados.push(nuevoEmpleado);

    res.status(201).json({
        message: 'Empleado creado exitosamente',
        empleado: nuevoEmpleado
    });
};




// Controlador para obtener todos los empleados

exports.obtenerEmpleados = (req, res) => {

    // se devuelve la lista de empleados
    res.json(empleados);
};