const express = require('express');
const router = express.Router();

const departamentoController = require('../Controllers/DepartamentoControler');



router.get("/empresa", departamentoController.obtenerEmpresa);
router.get("/departamentos", departamentoController.obtenerDepartamentos);
router.get("/empleados", departamentoController.obtenerEmpleados);

module.exports = router;