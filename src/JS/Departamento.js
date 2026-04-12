class Departamento {
    constructor(id, nombre, trabajadores = []) {
        this.id = id;
        this.nombre = nombre;
        this.trabajadores = trabajadores;
    }

    agregarTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
        console.log("Trabajador agregado con exito");
    }

    mostrarTrabajadores() {
        console.log(`Departamento: ${this.nombre}`);
        console.log('Trabajadores:');

        this.trabajadores.forEach(trabajador => {
            console.log(`- ${trabajador.nombre}`);
        });
    }
}