# Revista-EBD

Controle de pedidos e cobrança das revistas trimestrais da EBD (Escola Bíblica Dominical).

## 🚀 Publicar no GitHub Pages

1. **Crie um repositório no GitHub**
   - Acesse [github.com/new](https://github.com/new)
   - Nome sugerido: `revista-ebd`
   - Pode ser público ou privado (leia o aviso abaixo)
   - Não marque "Add a README" (já existe um aqui)

2. **Suba os arquivos**

   No terminal, dentro desta pasta:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do Revista-EBD"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/revista-ebd.git
   git push -u origin main
   ```

   Ou, se preferir, use o botão **"uploading an existing file"** na página do repositório recém-criado e arraste `index.html` e `README.md`.

3. **Ative o GitHub Pages**
   - No repositório, vá em **Settings → Pages**
   - Em "Build and deployment" → "Source", escolha **Deploy from a branch**
   - Branch: `main`, pasta: `/ (root)`
   - Salve. Em alguns minutos o site estará no ar em:
     `https://SEU-USUARIO.github.io/revista-ebd/`

4. **Pronto** — abra o link em qualquer navegador (computador ou celular). Os dados ficam salvos no JSONBin.io, então funcionam de qualquer aparelho.

## ⚠️ Aviso de segurança importante

Este app guarda os dados (clientes, pedidos, valores) em um serviço externo chamado **JSONBin.io**, e a chave de acesso a esse banco de dados está escrita diretamente no código (`JSONBIN_ACCESS_KEY`).

Isso significa que **qualquer pessoa que visitar o site e abrir "Ver código-fonte" no navegador** vai conseguir ver essa chave e, com ela, ler ou até apagar os dados guardados — independentemente de o repositório no GitHub ser público ou privado (tornar o repositório privado não esconde o código depois que o site é publicado).

Recomendações:
- Se possível, gere uma nova chave de acesso no painel do JSONBin.io de tempos em tempos.
- Verifique se é possível criar uma chave "somente leitura/escrita neste bin específico" em vez de uma chave mestra, restringindo o que ela pode acessar.
- Evite divulgar o link do site em locais muito públicos se preferir mais privacidade dos dados dos clientes.
- Como alternativa mais segura no futuro, os dados poderiam passar por um pequeno servidor intermediário (backend) em vez de o navegador acessar o JSONBin diretamente — assim a chave nunca fica exposta no navegador.

## 📁 Estrutura

```
revista-ebd/
├── index.html   ← aplicativo completo (HTML + CSS + JS em um único arquivo)
└── README.md    ← este arquivo
```
