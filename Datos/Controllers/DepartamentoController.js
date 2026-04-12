const fs = require('fs');
const path = require('path');
const Departamento = require('../Models/Departamento');

// Ruta al archivo db.json
const dbPath = path.join(__dirname, '../db.json');

// Leer los datos del archivo db.json
function leerDB() {
    const datos = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(datos);
}

// Guardar los datos en el archivo db.json
function guardarDB(datos) {
    fs.writeFileSync(dbPath, JSON.stringify(datos, null, 2));
}

// Crear departamento
exports.crearDepartamento = (req, res) => {
    const { nombre } = req.body;

    const nuevoDepartamento = new Departamento(nombre);

    // Leer db.json, agregar el departamento y guardar
    const db = leerDB();
    db.Departamentos.push(nuevoDepartamento);
    guardarDB(db);

    res.json({
        mensaje: "Departamento creado y guardado",
        data: nuevoDepartamento
    });
};

// Obtener todos los departamentos
exports.obtenerDepartamentos = (req, res) => {
    const db = leerDB();
    res.json(db.Departamentos);
};