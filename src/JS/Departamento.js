class Departamento {
    constructor(nombre, empleados = []) {
        this.nombre = nombre;
        this.empleados = empleados;
    }

    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
        console.log("Empleado agregado con exito");
    }

    mostrarEmpleados() {
        let resultado = `Departamento: ${this.nombre}\n`;
        resultado += "Empleados:\n";

        this.empleados.forEach(emp => {
            resultado += `- ${emp.nombre} (${emp.puesto})\n`;
        });

        return resultado;
    }
}