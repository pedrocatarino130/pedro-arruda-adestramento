# Pedro Arruda Adestramento

Landing page para o projeto de adestramento de Pedro Arruda.

## 📋 Descrição

Este projeto é uma landing page desenvolvida para apresentar os serviços de adestramento.

## 🚀 Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Estrutura do Projeto

```
/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── README.md
└── .gitignore
```

## 🛠️ Como Usar

1. Clone o repositório
2. Abra o arquivo `index.html` em seu navegador

## 📝 Convenção de Commits

Este projeto utiliza commits semânticos:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula faltando, etc
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `chore`: Atualização de tarefas de build, configuração, etc

## 🌐 GitHub Pages

O projeto está configurado para ser publicado via GitHub Pages na branch `main`.

### URLs de Acesso

- **GitHub Pages**: `https://pedrocatarino130.github.io/pedro-arruda-adestramento`
- **Domínio Customizado**: `https://casasdepet.com.br` (após configuração DNS)

### Domínio Customizado

O domínio `casasdepet.com.br` está configurado via arquivo `CNAME` no repositório.

📖 **Para configurar o DNS**, consulte o arquivo `DNS_SETUP.md` com instruções detalhadas.

## 📧 Formspree - Configuração de Email

O formulário de contato está integrado com o Formspree para receber notificações de leads.

### Configuração

1. **Form ID**: Substitua `YOUR_FORM_ID` no arquivo `index.html` (linha do formulário) pelo seu Form ID do Formspree
2. **Endpoint**: O endpoint do Formspree segue o formato: `https://formspree.io/f/{form_id}`
3. **Email de destino**: O email `pedrocatarino130@gmail.com` está configurado como destinatário no painel do Formspree

### Form ID Atual

**✅ Form ID configurado**: `mzzoeqyy`

**Endpoint**: `https://formspree.io/f/mzzoeqyy`

### Como obter o Form ID

1. Acesse [Formspree](https://formspree.io)
2. Faça login na sua conta
3. Crie um novo formulário ou selecione um existente
4. Copie o Form ID (exemplo: `xrgkqjvw`)
5. Substitua `YOUR_FORM_ID` no arquivo `index.html`

### Teste

Após configurar o Form ID, teste o envio do formulário para garantir que as notificações estão sendo recebidas corretamente.

## 📊 Google Analytics 4 (GA4)

O projeto está preparado para Google Analytics 4, mas o código está **comentado** até que um Measurement ID válido seja configurado.

⚠️ **Status**: Código comentado (não ativo) - Erros de console evitados enquanto não houver ID configurado

### Configuração

1. **Obtenha o Measurement ID no Google Analytics**:
   - Acesse [Google Analytics](https://analytics.google.com)
   - Crie uma nova propriedade GA4 ou selecione uma existente
   - Vá em **Administrador** > **Fluxos de dados** > Selecione seu fluxo de dados
   - Copie o **ID de medição** (formato: `G-XXXXXXXXXX`)

2. **Habilite o GA4 no arquivo `index.html`**:
   - Abra o arquivo `index.html`
   - Localize a seção comentada do Google Analytics (linhas 10-17)
   - Substitua `SEU_MEASUREMENT_ID_AQUI` pelo seu ID real (duas ocorrências)
   - Descomente o código removendo os comentários `<!--` e `-->`

3. **Formato**: O Measurement ID segue o formato `G-XXXXXXXXXX`

### Measurement ID Atual

**Status**: ⚠️ Código comentado - GA4 não está ativo até ser habilitado manualmente

### Eventos Personalizados Configurados

O projeto inclui três eventos personalizados que podem ser disparados via JavaScript:

- **`avaliacao_iniciada`**: Disparado quando o usuário inicia uma avaliação
  ```javascript
  trackAvaliacaoIniciada({ /* parâmetros opcionais */ });
  ```

- **`avaliacao_completa`**: Disparado quando o usuário completa uma avaliação
  ```javascript
  trackAvaliacaoCompleta({ /* parâmetros opcionais */ });
  ```

- **`whatsapp_clique`**: Disparado quando o usuário clica em um link/botão do WhatsApp
  ```javascript
  trackWhatsAppClique({ /* parâmetros opcionais */ });
  ```

### Teste e Debug

1. Instale a extensão [GA4 Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) no Chrome
2. Ative o modo debug na extensão
3. Navegue pela página e verifique os eventos no console do navegador
4. Verifique os eventos em tempo real no GA4: **Relatórios** > **Tempo real**

### Localização do Código

- **Script GA4**: `index.html` (linhas 11-26) - **Atualmente comentado**
- **Funções de tracking**: `assets/js/main.js` (linhas 118-158)

⚠️ **Nota**: As funções de tracking estão preparadas para funcionar mesmo quando o GA4 não está carregado (verificação `typeof gtag !== 'undefined'`), então não causarão erros no console.

## 📄 Licença

Este projeto é privado.

