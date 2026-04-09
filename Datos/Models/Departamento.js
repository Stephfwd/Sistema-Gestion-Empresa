class Departamento {
    constructor(nombre, empleados = []) {
        this.nombre = nombre;
        this.empleados = empleados;
    }
}

module.exports = Departamento;