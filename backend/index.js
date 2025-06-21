// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();

const livroRoutes = require('./routes/livroRoutes');
app.use('/api', livroRoutes);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({ message: 'API da Biblioteca Online está rodando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});