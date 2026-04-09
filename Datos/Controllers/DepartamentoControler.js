// ================= OBTENER EMPRESA =================
exports.obtenerEmpresa = (req, res) => {
    res.json(empresa);
};


// ================= OBTENER DEPARTAMENTOS =================
exports.obtenerDepartamentos = (req, res) => {
    res.json(empresa.departamentos);
};


// ================= OBTENER EMPLEADOS =================
exports.obtenerEmpleados = (req, res) => {
    let empleados = [];

    empresa.departamentos.forEach(dep => {
        empleados = empleados.concat(dep.empleados);
    });

    res.json(empleados);
};