const Empresa = require('../Models/Empresa');
const Departamento = require('../Models/Departamento');

let empresa = new Empresa("Mi Empresa");

const getEmpresa = () => {
    return empresa;
};

const postEmpresa = (nombre, departamentos = []) => {
    empresa = new Empresa(nombre);
 
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