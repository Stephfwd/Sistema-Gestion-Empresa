const express = require('express');
const router = express.Router();

const {
    crearEmpresa,
    obtenerEmpresa,
    agregarDepartamento
} = require('../Controllers/EmpresaController');

// Crear empresa
router.post('/', crearEmpresa);

// Obtener empresa
router.get('/', obtenerEmpresa);

// Agregar departamento a la empresa
router.post('/departamentos', agregarDepartamento);

module.exports = router;