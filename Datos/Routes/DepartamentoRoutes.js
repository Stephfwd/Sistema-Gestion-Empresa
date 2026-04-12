const express = require('express');
const router = express.Router();

const {
    crearDepartamento,
    obtenerDepartamentos
} = require('../Controllers/DepartamentoController');

router.post('/', crearDepartamento);
router.get('/', obtenerDepartamentos);

module.exports = router;