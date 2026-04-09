class Empresa {
    constructor(nombre, departamentos = []) {
        this.nombre = nombre;
        this.departamentos = JSON.parse(localStorage.getItem('departamentos')) || departamentos;
    }

    agregarDepartamento(departamento) {
        this.departamentos.push(departamento);
        localStorage.setItem('departamentos', JSON.stringify(this.departamentos));
        console.log("Departamento agregado con exito");
    }

    mostrarInformacion() {
        let resultado = `Empresa: ${this.nombre}\n\n`;
        resultado += "Departamentos:\n";

        this.departamentos.forEach(dep => {
            resultado += `\n- ${dep.nombre}\n`;

            if (dep.empleados && dep.empleados.length > 0) {
                dep.empleados.forEach(emp => {
                    resultado += `   * ${emp.nombre} (${emp.puesto})\n`;
                });
            } else {
                resultado += "   (Sin empleados)\n";
            }
        });

        return resultado;
    }

    obtenerDepartamento(nombre) {
        return this.departamentos.find(dep => dep.nombre === nombre);
    }
}

const empresa = new Empresa("Mi Empresa");

function crearDepartamento() {
    const nombre = document.getElementById("nombreDep").value;

    if (!nombre) {
        alert("Ingrese un nombre");
        return;
    }

    const dep = new Departamento(nombre);
    empresa.agregarDepartamento(dep);

    alert("Departamento creado");
}

function agregarEmpleado() {
    const nombre = document.getElementById("nombreEmp").value;
    const puesto = document.getElementById("puestoEmp").value;
    const depNombre = document.getElementById("depEmp").value;

    const dep = empresa.obtenerDepartamento(depNombre);

    if (!dep) {
        alert("Departamento no existe");
        return;
    }

    const emp = new Empleado(nombre, puesto);
    dep.agregarEmpleado(emp);

    localStorage.setItem('departamentos', JSON.stringify(empresa.departamentos));

    alert("Empleado agregado");
}

function mostrarEmpresa() {
    const salida = document.getElementById("salida");
    salida.textContent = empresa.mostrarInformacion();
}