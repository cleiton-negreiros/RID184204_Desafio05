const express = require('express');
const router = express.Router();

let livros = [
  { id: 1, titulo: 'Livro 1', paginas: 200, isbn: '123-4567890123', editora: 'Editora A' },
  { id: 2, titulo: 'Livro 2', paginas: 300, isbn: '987-6543210987', editora: 'Editora B' }
];

router.get('/livros', (req, res) => {
  res.json(livros);
});

router.post('/livros', (req, res) => {
  const novoLivro = {
    id: livros.length + 1,
    ...req.body
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

module.exports = router;