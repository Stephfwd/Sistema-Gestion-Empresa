class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.departamentos = [];
    }

    agregarDepartamento(departamento) {
        this.departamentos.push(departamento);
    }
}

module.exports = Empresa;