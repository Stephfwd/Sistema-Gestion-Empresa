const express = require('express');
const router = express.Router();

const {
    crearEmpresa,
    obtenerEmpresa,
    agregarDepartamento
} = require('../Controllers/EmpresaController');


router.post('/', crearEmpresa);


router.get('/', obtenerEmpresa);


router.post('/departamentos', agregarDepartamento);

module.exports = router;