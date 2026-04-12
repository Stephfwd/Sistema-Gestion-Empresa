const express = require('express');
const router = express.Router();

const {
    crearEmpleado,
    obtenerEmpleados
} = require('../Controllers/EmpleadoController');

router.post('/', crearEmpleado);
router.get('/', obtenerEmpleados);

module.exports = router;