const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Configura el servidor para servir archivos estáticos (por ejemplo, HTML, CSS, JavaScript)
app.use(express.static('public'));

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});