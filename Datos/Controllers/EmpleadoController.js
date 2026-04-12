const fs = require('fs');
const path = require('path');
const Empleado = require('../Models/Empleado');


const dbPath = path.join(__dirname, '../db.json');


function leerDB() {
    const datos = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(datos);
}


function guardarDB(datos) {
    fs.writeFileSync(dbPath, JSON.stringify(datos, null, 2));
}


exports.crearEmpleado = (req, res) => {
    const { nombre, puesto } = req.body;

    const nuevoEmpleado = new Empleado(nombre, puesto);

    const db = leerDB();
    db.Empleados.push(nuevoEmpleado);
    guardarDB(db);

    res.json({
        mensaje: "Empleado creado y guardado",
        data: nuevoEmpleado
    });
};


exports.obtenerEmpleados = (req, res) => {
    const db = leerDB();
    res.json(db.Empleados);
};