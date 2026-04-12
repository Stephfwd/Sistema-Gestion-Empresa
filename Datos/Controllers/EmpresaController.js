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


function guardarDB(datos) {
    fs.writeFileSync(dbPath, JSON.stringify(datos, null, 2));
}

exports.crearEmpresa = (req, res) => {
    const { nombre, departamento, empleados } = req.body;

    const empresa = new Empresa(nombre);


    if (departamento && Array.isArray(departamento)) {
        departamento.forEach(dep => {
            const nuevoDepartamento = new Departamento(dep);
            empresa.agregarDepartamento(nuevoDepartamento);
        });
    }

    if (empleados && Array.isArray(empleados) && empresa.departamentos.length > 0) {
        empleados.forEach((nombreEmpleado, index) => {
            const nuevoEmpleado = new Empleado(nombreEmpleado, '');
            // Distribuye los empleados entre los departamentos en orden
            const depIndex = index % empresa.departamentos.length;
            empresa.departamentos[depIndex].agregarEmpleado(nuevoEmpleado);
        });
    }

    
    const db = leerDB();
    db.Empresa.push(empresa);
    guardarDB(db);

    res.json({
        mensaje: "Empresa creada y guardada",
        data: empresa
    });
};


exports.obtenerEmpresa = (req, res) => {
    const db = leerDB();
    res.json(db.Empresa);
};


exports.agregarDepartamento = (req, res) => {
    const { nombre } = req.body;

    const nuevoDepartamento = new Departamento(nombre);

  
    const db = leerDB();

  
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