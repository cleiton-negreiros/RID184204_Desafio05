# 🚀 Guia de Deploy - Biblioteca Online

## 📋 Pré-requisitos

- Conta no GitHub
- Conta no Netlify
- Git instalado localmente

## 🔄 Passo 1: Subir para o GitHub

### 1.1 Inicializar repositório Git (se não existir)
```bash
git init
git add .
git commit -m "Initial commit: Biblioteca Online completa"
```

### 1.2 Conectar com repositório remoto
```bash
git remote add origin https://github.com/cleiton-negreiros/RID184204_Desafio05.git
git branch -M main
git push -u origin main
```

### 1.3 Verificar se todos os arquivos foram enviados
- Acesse: https://github.com/cleiton-negreiros/RID184204_Desafio05
- Confirme se todos os arquivos estão presentes

## 🌐 Passo 2: Deploy no Netlify

### 2.1 Acessar Netlify
1. Acesse: https://www.netlify.com/
2. Faça login com sua conta
3. Clique em "New site from Git"

### 2.2 Conectar repositório
1. Escolha "GitHub"
2. Autorize o Netlify a acessar seus repositórios
3. Selecione o repositório: `cleiton-negreiros/RID184204_Desafio05`

### 2.3 Configurar build
- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `frontend/dist`

### 2.4 Variáveis de ambiente (se necessário)
- Não são necessárias para este projeto

### 2.5 Deploy
1. Clique em "Deploy site"
2. Aguarde o build completar
3. Acesse a URL gerada pelo Netlify

## ⚠️ Importante: Limitações do Deploy

### Frontend Only
- O Netlify hospedará apenas o **frontend** (React)
- O **backend** (Node.js) não será hospedado no Netlify
- Para funcionalidade completa, o backend precisa ser hospedado separadamente

### Opções para o Backend
1. **Heroku** (gratuito com limitações)
2. **Railway** (gratuito com limitações)
3. **Render** (gratuito com limitações)
4. **Vercel** (para APIs simples)

## 🔧 Configurações Adicionais

### Custom Domain (Opcional)
1. No painel do Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Configure seu domínio personalizado

### HTTPS
- O Netlify fornece HTTPS automaticamente
- Certificado SSL gratuito via Let's Encrypt

## 📱 URLs do Projeto

Após o deploy:
- **Frontend (Netlify):** https://[seu-site].netlify.app
- **GitHub:** https://github.com/cleiton-negreiros/RID184204_Desafio05

## 🐛 Troubleshooting

### Build Falha
- Verifique se todas as dependências estão no package.json
- Confirme se o comando de build está correto
- Verifique os logs de build no Netlify

### Rotas não funcionam
- O arquivo `netlify.toml` já está configurado para SPAs
- Todas as rotas redirecionam para `index.html`

### Assets não carregam
- Verifique se os caminhos estão relativos
- Confirme se o `base` está configurado corretamente no Vite
