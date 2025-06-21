const express = require('express');
const router = express.Router();

let livros = [
  { id: 1, titulo: 'Livro 1', paginas: 200, isbn: '123-4567890123', editora: 'Editora A' },
  { id: 2, titulo: 'Livro 2', paginas: 300, isbn: '987-6543210987', editora: 'Editora B' }
];

// Função auxiliar para gerar próximo ID
const getNextId = () => {
  return livros.length > 0 ? Math.max(...livros.map(l => l.id)) + 1 : 1;
};

// Função auxiliar para validar dados do livro
const validarLivro = (dados) => {
  const { titulo, paginas, isbn, editora } = dados;

  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
    return 'Título é obrigatório e deve ser uma string válida';
  }

  if (!paginas || typeof paginas !== 'number' || paginas <= 0) {
    return 'Número de páginas é obrigatório e deve ser um número positivo';
  }

  if (!isbn || typeof isbn !== 'string' || isbn.trim() === '') {
    return 'ISBN é obrigatório e deve ser uma string válida';
  }

  if (!editora || typeof editora !== 'string' || editora.trim() === '') {
    return 'Editora é obrigatória e deve ser uma string válida';
  }

  return null;
};

// GET /api/livros - Listar todos os livros
router.get('/livros', (req, res) => {
  try {
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

// GET /api/livros/:id - Buscar livro por ID
router.get('/livros/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ mensagem: 'ID deve ser um número válido' });
    }

    const livro = livros.find(l => l.id === id);

    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }

    res.json(livro);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

// POST /api/livros - Criar novo livro
router.post('/livros', (req, res) => {
  try {
    const erro = validarLivro(req.body);
    if (erro) {
      return res.status(400).json({ mensagem: erro });
    }

    // Verificar se ISBN já existe
    const isbnExiste = livros.some(l => l.isbn === req.body.isbn);
    if (isbnExiste) {
      return res.status(400).json({ mensagem: 'ISBN já existe no sistema' });
    }

    const novoLivro = {
      id: getNextId(),
      titulo: req.body.titulo.trim(),
      paginas: req.body.paginas,
      isbn: req.body.isbn.trim(),
      editora: req.body.editora.trim()
    };

    livros.push(novoLivro);
    res.status(201).json({ mensagem: 'Livro criado com sucesso', livro: novoLivro });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

// PUT /api/livros/:id - Atualizar livro
router.put('/livros/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ mensagem: 'ID deve ser um número válido' });
    }

    const indice = livros.findIndex(l => l.id === id);

    if (indice === -1) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }

    const erro = validarLivro(req.body);
    if (erro) {
      return res.status(400).json({ mensagem: erro });
    }

    // Verificar se ISBN já existe em outro livro
    const isbnExiste = livros.some(l => l.isbn === req.body.isbn && l.id !== id);
    if (isbnExiste) {
      return res.status(400).json({ mensagem: 'ISBN já existe em outro livro' });
    }

    const livroAtualizado = {
      id: id,
      titulo: req.body.titulo.trim(),
      paginas: req.body.paginas,
      isbn: req.body.isbn.trim(),
      editora: req.body.editora.trim()
    };

    livros[indice] = livroAtualizado;
    res.json({ mensagem: 'Livro atualizado com sucesso', livro: livroAtualizado });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

// DELETE /api/livros/:id - Deletar livro
router.delete('/livros/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ mensagem: 'ID deve ser um número válido' });
    }

    const indice = livros.findIndex(l => l.id === id);

    if (indice === -1) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }

    const livroRemovido = livros.splice(indice, 1)[0];
    res.json({ mensagem: 'Livro removido com sucesso', livro: livroRemovido });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

module.exports = router;