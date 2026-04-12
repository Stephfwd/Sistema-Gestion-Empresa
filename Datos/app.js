const express = require('express');
const app = express();

app.use(express.json());

const empresaRoutes = require('./Routes/EmpresaRoutes');
const departamentoRoutes = require('./Routes/DepartamentoRoutes');
const empleadoRoutes = require('./Routes/EmpleadoRoutes');
const rolRoutes = require('./Routes/RolRoutes');

app.use('/api/empresa', empresaRoutes);
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/roles', rolRoutes);

app.get('/', (req, res) => {
    res.send('API de Gestión de Empresa funcionando 🚀');
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});