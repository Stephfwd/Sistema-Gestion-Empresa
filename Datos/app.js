const express = require('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Importar rutas
const empresaRoutes = require('./Routes/EmpresaRoutes');
const departamentoRoutes = require('./Routes/DepartamentoRoutes');
const empleadoRoutes = require('./Routes/EmpleadoRoutes');

// Usar rutas
app.use('/api/empresa', empresaRoutes);
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/empleados', empleadoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Gestión de Empresa funcionando 🚀');
});

// Puerto
const PORT = 3000;

// Levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});