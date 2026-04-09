const express = require('express');
const app = express();

// importante para manejar JSON
app.use(express.json());

// importar rutas
const departamentoRoutes = require('./Routes/DepartamentoRoutes');
const empleadoRoutes = require('./Routes/EmpleadoRoutes');
const empresaRoutes = require('./Routes/EmpresaRoutes');

// usar rutas
app.use('/api', departamentoRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/empresa', empresaRoutes);

// puerto
const PORT = 3000;

// levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});