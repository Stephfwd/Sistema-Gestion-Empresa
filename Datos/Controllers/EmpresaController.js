const Empresa = require('../models/Empresa');

// simulación de datos
let empresa = new Empresa("Mi Empresa");


// Controlador para crear una empresa

exports.crearEmpresa = (req, res) => {
    const { nombre } = req.body;

    empresa = new Empresa(nombre);

    res.status(201).json({
        message: 'Empresa creada exitosamente',
        empresa: empresa
    });
};




// Controlador para obtener la información de la empresa

exports.obtenerEmpresa = (req, res) => {

    res.json(empresa);
};