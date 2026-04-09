const express = require('express');
const router = express.Router();

const empresaController = require('../Controllers/EmpresaController');



router.get("/", empresaController.obtenerEmpresa);

module.exports = router;