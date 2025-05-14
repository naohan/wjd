require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Bienvenidos al curso con interfaz React!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Servidor backend corriendo en puerto ' + PORT);
});
