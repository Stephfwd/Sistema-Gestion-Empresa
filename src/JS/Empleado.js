class Empleado {
    constructor(nombre, puesto) {
        this.nombre = nombre;
        this.puesto = puesto;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre} | Puesto: ${this.puesto}`;
    }
}
