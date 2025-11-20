# 📧 Guia de Configuração do Formspree

## ✅ O que já foi implementado

- ✅ Formulário de contato criado no HTML
- ✅ Estilos CSS responsivos
- ✅ JavaScript com validação e feedback visual
- ✅ Integração com Formspree configurada
- ✅ Form ID configurado: `mzzoeqyy`
- ✅ Endpoint: `https://formspree.io/f/mzzoeqyy`

## 🔧 Próximos Passos - Configuração no Formspree

### 1. Acessar o Painel do Formspree

1. Acesse [https://formspree.io](https://formspree.io)
2. Faça login na sua conta (criada pela Hostinger)

### 2. Criar ou Selecionar um Formulário

1. No painel, clique em **"New Form"** ou selecione um formulário existente
2. Se criar um novo, dê um nome descritivo (ex: "Landing Page - Adestramento")

### 3. Configurar Email de Destino

1. No formulário criado, vá em **"Settings"** ou **"Email"**
2. Configure o email de destino: **pedrocatarino130@gmail.com** (já configurado)
3. Salve as configurações

**Nota**: Se quiser adicionar `adestradores@casasdepet.com.br` como destinatário adicional, adicione-o primeiro em **"Linked Emails"** na página da conta do Formspree.

### 4. Form ID Configurado ✅

- **Form ID**: `mzzoeqyy`
- **Endpoint**: `https://formspree.io/f/mzzoeqyy`
- **Status**: ✅ Configurado no código

### 5. Testar o Formulário

1. Abra o arquivo `index.html` no navegador
2. Preencha o formulário com dados de teste
3. Envie o formulário
4. Verifique se você recebeu o email em **pedrocatarino130@gmail.com**

## 📋 Checklist de Configuração

- [x] Login realizado no Formspree
- [x] Formulário criado/selecionado no painel
- [x] Email `pedrocatarino130@gmail.com` configurado como destinatário
- [x] Form ID copiado do painel: `mzzoeqyy`
- [x] Form ID atualizado no arquivo `index.html`
- [x] Form ID documentado no `README.md`
- [ ] Teste de envio realizado com sucesso
- [ ] Email de notificação recebido

## 🔍 Informações Técnicas

### Endpoint do Formspree
- Formato: `https://formspree.io/f/{form_id}`
- Método: `POST`
- Content-Type: `application/x-www-form-urlencoded` (gerenciado automaticamente)

### Campos do Formulário
- `name` (obrigatório) - Nome do lead
- `email` (obrigatório) - Email do lead
- `phone` (opcional) - Telefone do lead
- `message` (obrigatório) - Mensagem do lead

### Limites do Tier Gratuito
- ✅ 50 submissões/mês (suficiente para MVP)
- ✅ Sem limite de formulários
- ✅ Suporte a email personalizado

## ⚠️ Notas Importantes

1. **Email de destino**: O email `pedrocatarino130@gmail.com` está configurado como destinatário. Se quiser adicionar `adestradores@casasdepet.com.br`, adicione-o primeiro em "Linked Emails" na conta do Formspree.
2. **Validação**: O formulário já possui validação client-side, mas o Formspree também valida no servidor
3. **Spam Protection**: O Formspree possui proteção anti-spam integrada
4. **HTTPS**: O Formspree requer HTTPS em produção (GitHub Pages já fornece isso)

## 🆘 Troubleshooting

### O formulário não envia
- Verifique se o Form ID está correto no `index.html`
- Verifique o console do navegador para erros
- Confirme que o formulário está ativo no painel do Formspree

### Não recebo emails
- Verifique a pasta de spam do email `pedrocatarino130@gmail.com`
- Confirme que o email está configurado corretamente no painel do Formspree
- Verifique os logs no painel do Formspree para ver se há erros

### Erro 404 ao enviar
- O Form ID está incorreto ou o formulário foi deletado
- Verifique se o formulário está ativo no painel do Formspree

