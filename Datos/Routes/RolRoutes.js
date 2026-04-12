const express = require('express');
const router = express.Router();

const {
    crearRol,
    obtenerRoles
} = require('../Controllers/RolController');


router.get('/', obtenerRoles);
router.post('/', crearRol);

module.exports = router;
