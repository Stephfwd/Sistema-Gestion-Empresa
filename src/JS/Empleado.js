class Empleado {
    constructor(id, nombre, puesto) {
        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
    }

    mostrarEmpleado() {
        console.log(`Empleado: ${this.nombre}, Puesto: ${this.puesto}`);
    }
}