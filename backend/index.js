// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares devem vir antes das rotas
app.use(cors());
app.use(express.json());

// Rotas
const livroRoutes = require('./routes/livroRoutes');
app.use('/api', livroRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'API da Biblioteca Online está rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});