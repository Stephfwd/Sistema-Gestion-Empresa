const fs = require('fs');
const path = require('path');


const dbPath = path.join(__dirname, '../db.json');

function leerDB() {
    const datos = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(datos);
}

function guardarDB(datos) {
    fs.writeFileSync(dbPath, JSON.stringify(datos, null, 2));
}

exports.obtenerRoles = (req, res) => {
    try {
        const db = leerDB();
        res.json(db.Roles);
    } catch (error) {
        res.status(500).json({ error: "Error al leer los roles" });
    }
};


exports.crearRol = (req, res) => {
    try {
        const { id, nombre, descripcion } = req.body;
        
        if (!nombre || !descripcion) {
            return res.status(400).json({ error: "Nombre y descripción son requeridos" });
        }

        const db = leerDB();
        
        
        const nuevoId = id || (db.Roles.length > 0 ? (parseInt(db.Roles[db.Roles.length - 1].id) + 1).toString() : "1");

        const nuevoRol = {
            id: nuevoId,
            nombre: nombre,
            descripcion: descripcion
        };

        db.Roles.push(nuevoRol);
        guardarDB(db);

        res.status(201).json({
            mensaje: "Rol creado exitosamente",
            data: nuevoRol
        });
    } catch (error) {
        res.status(500).json({ error: "Error al crear el rol" });
    }
};
