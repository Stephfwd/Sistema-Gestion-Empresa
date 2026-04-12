const Empresa = require('../Models/Empresa');
const Departamento = require('../Models/Departamento');

let empresa = new Empresa("Mi Empresa");

// Obtener empresa
const getEmpresa = () => {
    return empresa;
};

// Crear empresa con departamentos
const postEmpresa = (nombre, departamentos = []) => {
    empresa = new Empresa(nombre);

    // 🔥 Validación por si no viene nada
    if (Array.isArray(departamentos)) {
        departamentos.forEach(dep => {
            const nuevoDepartamento = new Departamento(dep);
            empresa.agregarDepartamento(nuevoDepartamento);
        });
    }

    return empresa;
};

module.exports = {
    getEmpresa,
    postEmpresa
};