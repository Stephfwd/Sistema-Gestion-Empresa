const fs = require('fs');
const path = require('path');
const Empleado = require('../Models/Empleado');

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

// Crear empleado
exports.crearEmpleado = (req, res) => {
    const { nombre, puesto } = req.body;

    const nuevoEmpleado = new Empleado(nombre, puesto);

    // Leer db.json, agregar el empleado y guardar
    const db = leerDB();
    db.Empleados.push(nuevoEmpleado);
    guardarDB(db);

    res.json({
        mensaje: "Empleado creado y guardado",
        data: nuevoEmpleado
    });
};

// Obtener todos los empleados
exports.obtenerEmpleados = (req, res) => {
    const db = leerDB();
    res.json(db.Empleados);
};