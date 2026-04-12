const fs = require('fs');
const path = require('path');
const Departamento = require('../Models/Departamento');

const dbPath = path.join(__dirname, '../db.json');


function leerDB() {
    const datos = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(datos);
}

function guardarDB(datos) {
    fs.writeFileSync(dbPath, JSON.stringify(datos, null, 2));
}


exports.crearDepartamento = (req, res) => {
    const { nombre } = req.body;

    const nuevoDepartamento = new Departamento(nombre);

    const db = leerDB();
    db.Departamentos.push(nuevoDepartamento);
    guardarDB(db);

    res.json({
        mensaje: "Departamento creado y guardado",
        data: nuevoDepartamento
    });
};


exports.obtenerDepartamentos = (req, res) => {
    const db = leerDB();
    res.json(db.Departamentos);
};