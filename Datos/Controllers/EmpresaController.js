const fs = require('fs');
const path = require('path');
const Empresa = require('../Models/Empresa');
const Departamento = require('../Models/Departamento');
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

// Crear empresa
exports.crearEmpresa = (req, res) => {
    const { nombre, departamento, empleados } = req.body;

    const empresa = new Empresa(nombre);

    // Si vienen departamentos en el body, los agrega
    if (departamento && Array.isArray(departamento)) {
        departamento.forEach(dep => {
            const nuevoDepartamento = new Departamento(dep);
            empresa.agregarDepartamento(nuevoDepartamento);
        });
    }

    // Si vienen empleados en el body, los agrega al primer departamento disponible
    if (empleados && Array.isArray(empleados) && empresa.departamentos.length > 0) {
        empleados.forEach((nombreEmpleado, index) => {
            const nuevoEmpleado = new Empleado(nombreEmpleado, '');
            // Distribuye los empleados entre los departamentos en orden
            const depIndex = index % empresa.departamentos.length;
            empresa.departamentos[depIndex].agregarEmpleado(nuevoEmpleado);
        });
    }

    // Leer db.json, agregar la empresa y guardar
    const db = leerDB();
    db.Empresa.push(empresa);
    guardarDB(db);

    res.json({
        mensaje: "Empresa creada y guardada",
        data: empresa
    });
};

// Obtener empresa
exports.obtenerEmpresa = (req, res) => {
    const db = leerDB();
    res.json(db.Empresa);
};

// Agregar departamento a la empresa
exports.agregarDepartamento = (req, res) => {
    const { nombre } = req.body;

    const nuevoDepartamento = new Departamento(nombre);

    // Leer db.json
    const db = leerDB();

    // Agregar el departamento a la primera empresa
    if (db.Empresa.length > 0) {
        db.Empresa[0].departamentos.push(nuevoDepartamento);
        guardarDB(db);

        res.json({
            mensaje: "Departamento agregado a la empresa",
            data: db.Empresa[0]
        });
    } else {
        res.json({ mensaje: "No hay ninguna empresa creada todavía" });
    }
};