const express = require('express');
const app = express();
const path = require('path');

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de datos (API)
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

app.use('/', clientesRoutes);
app.use('/', productosRoutes);

app.listen(9000, () => {
  console.log('Servidor corriendo en puerto 9000 🚀');
});
