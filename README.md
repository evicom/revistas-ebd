# 📚 Revistas EBD

App PWA para gestão de vendas de revistas da **Escola Bíblica Dominical — PECC 2026**.

## ✨ Funcionalidades
- Catálogo de 9 revistas com preços
- Cadastro de clientes e pedidos
- Controle de pagamentos com status automático
- Relatório completo exportável via WhatsApp
- Trimestres 2026 com datas de entrega
- **Instalável como app** em Android, iOS, Windows, Mac e Linux

---

## 🚀 Como publicar no GitHub Pages

### 1. Criar repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"**
3. Nome: `revistas-ebd` (ou qualquer nome)
4. Deixe como **Public**
5. Clique em **"Create repository"**

### 2. Fazer upload dos arquivos
Na página do repositório vazio, clique em **"uploading an existing file"** e envie todos os arquivos desta pasta:
```
revistas-ebd/
├── index.html
├── manifest.json
├── sw.js
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── .github/
    └── workflows/
        └── deploy.yml
```

### 3. Ativar GitHub Pages
1. No repositório, vá em **Settings** → **Pages**
2. Em "Source", selecione **"GitHub Actions"**
3. Salve. O deploy será feito automaticamente!

### 4. Acessar o app
Após o deploy (1-2 minutos), seu app estará em:
```
https://SEU-USUARIO.github.io/revistas-ebd/
```

---

## 📲 Como instalar o app

### Android (Chrome/Edge)
- Abra o link no navegador
- Toque no banner **"Instalar"** que aparece
- Ou: menu ⋮ → **"Adicionar à tela inicial"**

### iPhone/iPad (Safari)
- Abra o link no **Safari**
- Toque em **Compartilhar** (ícone de caixa com seta)
- Toque em **"Adicionar à Tela de Início"**

### Windows/Mac (Chrome ou Edge)
- Abra o link no navegador
- Clique no ícone de instalação na barra de endereço (ícone de computador com seta)
- Clique em **"Instalar"**

---

## 💾 Dados
Os dados ficam salvos localmente no dispositivo (localStorage). Não são enviados a nenhum servidor.
