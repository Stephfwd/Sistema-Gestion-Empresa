class Departamento {
    constructor(nombre) {
        this.nombre = nombre;
        this.empleados = [];
    }

    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }
}

module.exports = Departamento;