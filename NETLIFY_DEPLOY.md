# 🌐 Deploy no Netlify - Passo a Passo

## 🎯 Objetivo
Hospedar o frontend da Biblioteca Online no Netlify de forma gratuita.

## 📋 Pré-requisitos
- ✅ Projeto já está no GitHub: https://github.com/cleiton-negreiros/RID184204_Desafio05
- ✅ Conta no Netlify (gratuita)

## 🚀 Passos para Deploy

### 1. Acessar o Netlify
1. Acesse: https://www.netlify.com/
2. Clique em **"Log in"** ou **"Sign up"** se não tiver conta
3. Faça login com GitHub (recomendado)

### 2. Criar Novo Site
1. No dashboard, clique em **"New site from Git"**
2. Escolha **"GitHub"**
3. Autorize o Netlify a acessar seus repositórios (se necessário)

### 3. Selecionar Repositório
1. Procure por: `cleiton-negreiros/RID184204_Desafio05`
2. Clique no repositório para selecioná-lo

### 4. Configurar Build Settings
**⚠️ IMPORTANTE: Use exatamente estas configurações:**

- **Branch to deploy:** `main`
- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `frontend/dist`

### 5. Variáveis de Ambiente
- Não são necessárias para este projeto
- Clique em **"Deploy site"**

### 6. Aguardar Deploy
1. O Netlify iniciará o processo de build
2. Aguarde alguns minutos (primeira vez pode demorar mais)
3. Acompanhe o progresso na aba "Deploys"

### 7. Verificar Deploy
1. Após concluído, você receberá uma URL como: `https://amazing-name-123456.netlify.app`
2. Clique na URL para acessar o site
3. Teste as funcionalidades do frontend

## 🔧 Configurações Adicionais

### Personalizar URL (Opcional)
1. Vá em **"Site settings"**
2. Clique em **"Change site name"**
3. Escolha um nome como: `biblioteca-online-cleiton`
4. Nova URL: `https://biblioteca-online-cleiton.netlify.app`

### Deploy Automático
- ✅ Já configurado automaticamente
- Cada push para `main` no GitHub fará um novo deploy
- Não precisa fazer nada manual

## ⚠️ Limitações Importantes

### Frontend Only
- O Netlify hospeda apenas o **frontend** (React)
- O **backend** (Node.js API) NÃO será hospedado
- As funcionalidades que dependem da API não funcionarão

### Funcionalidades que Funcionarão
- ✅ Interface visual completa
- ✅ Navegação entre páginas
- ✅ Formulários (interface)
- ✅ Design responsivo

### Funcionalidades que NÃO Funcionarão
- ❌ Listar livros (precisa da API)
- ❌ Cadastrar livros (precisa da API)
- ❌ Editar livros (precisa da API)
- ❌ Deletar livros (precisa da API)

## 🔗 URLs Finais

Após o deploy:
- **🌐 Site no Netlify:** `https://[seu-nome].netlify.app`
- **📂 Repositório GitHub:** https://github.com/cleiton-negreiros/RID184204_Desafio05
- **📋 Documentação:** README.md no repositório

## 🎉 Próximos Passos

Para funcionalidade completa, considere hospedar o backend em:
- **Heroku** (gratuito com limitações)
- **Railway** (gratuito com limitações)
- **Render** (gratuito com limitações)
- **Vercel** (para APIs simples)

## 🐛 Troubleshooting

### Build Falha
- Verifique se as configurações estão corretas
- Confirme se o `frontend/package.json` tem o script `build`
- Veja os logs de erro na aba "Deploys"

### Site não carrega
- Aguarde alguns minutos após o deploy
- Limpe o cache do navegador
- Verifique se a URL está correta

### Rotas 404
- O arquivo `netlify.toml` já está configurado
- Todas as rotas redirecionam para `index.html`
