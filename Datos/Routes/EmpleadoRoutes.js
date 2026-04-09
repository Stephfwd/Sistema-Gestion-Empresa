const express = require('express');
const router = express.Router();

const empleadoController = require('../Controllers/EmpleadoController');


router.get("/", empleadoController.obtenerEmpleados);

module.exports = router;