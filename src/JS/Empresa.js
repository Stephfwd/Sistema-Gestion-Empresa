class Empresa {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    mostrarInformacion(departamentos) {
        console.log(`Empresa: ${this.nombre}`);
        console.log('Departamentos:');

        departamentos.forEach(dep => {
            console.log(`- ${dep.nombre}`);
        });
    }
}