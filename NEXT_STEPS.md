# 🚀 Próximos Passos Após Configuração DNS

## ✅ DNS Configurado

Agora que os registros DNS foram configurados na Hostinger, siga estes passos:

---

## 📋 Passo 1: Verificar e Enviar o Arquivo CNAME

### Verificar se o CNAME está commitado

```bash
# Verificar status do Git
git status

# Se o arquivo CNAME não estiver commitado, faça:
git add CNAME
git commit -m "feat: adicionar domínio customizado casasdepet.com.br"
git push origin main
```

**Importante**: O arquivo `CNAME` deve estar na raiz do repositório na branch `main`.

---

## 📋 Passo 2: Configurar Domínio no GitHub Pages

1. **Acesse o repositório no GitHub**:
   - URL: `https://github.com/pedrocatarino130/pedro-arruda-adestramento`
   - Ou navegue: GitHub > Seus Repositórios > `pedro-arruda-adestramento`

2. **Vá em Settings**:
   - Clique na aba **Settings** (no topo do repositório)

3. **Acesse GitHub Pages**:
   - No menu lateral esquerdo, clique em **Pages**
   - Ou acesse diretamente: `https://github.com/pedrocatarino130/pedro-arruda-adestramento/settings/pages`

4. **Configure o domínio customizado**:
   - Na seção **Custom domain**, digite: `casasdepet.com.br`
   - Clique em **Save**

5. **Aguardar detecção automática**:
   - O GitHub tentará detectar o domínio
   - Pode aparecer um aviso "DNS check failed" - isso é normal inicialmente

---

## ⏳ Passo 3: Aguardar Propagação DNS

### Tempo de Propagação
- **Estimativa**: 24-48 horas (pode ser mais rápido, às vezes 1-2 horas)
- **Propagação global**: Pode levar até 48 horas para propagar completamente em todos os servidores DNS do mundo

### Verificar Propagação DNS

Use estas ferramentas online para verificar:

1. **whatsmydns.net**:
   - https://www.whatsmydns.net/#A/casasdepet.com.br
   - Verifica propagação em múltiplos servidores DNS

2. **dnschecker.org**:
   - https://dnschecker.org/#A/casasdepet.com.br
   - Mostra propagação em diferentes localizações

3. **Comando local (PowerShell)**:
   ```powershell
   nslookup casasdepet.com.br
   ```
   - Deve retornar os IPs do GitHub Pages configurados

### O que você está procurando?

Se configurou **registros A**, os IPs devem ser:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Se configurou **CNAME**, deve apontar para:
- `pedrocatarino130.github.io`

---

## 🔐 Passo 4: Habilitar HTTPS (Após Propagação)

### Quando o HTTPS estará disponível?

O GitHub Pages emite certificados SSL automaticamente após:
1. ✅ Domínio customizado configurado no GitHub
2. ✅ Propagação DNS completa (24-48h)
3. ✅ GitHub detectar o domínio funcionando

### Como habilitar HTTPS:

1. **Volte em Settings > Pages** no repositório GitHub
2. **Aguarde a propagação DNS completa** (pode levar até 48h)
3. **Verifique o status**:
   - Deve aparecer uma mensagem: "Your site is published at https://casasdepet.com.br"
   - Ou "DNS check passed"

4. **Marque a opção "Enforce HTTPS"**:
   - Quando o certificado SSL estiver pronto, a opção **Enforce HTTPS** ficará disponível
   - Marque essa opção para forçar redirecionamento HTTP → HTTPS

---

## ✅ Passo 5: Verificar Funcionamento

Após a propagação DNS e habilitar HTTPS, teste:

### 1. Acesso ao Domínio
- ✅ `https://casasdepet.com.br` deve carregar a landing page
- ✅ `http://casasdepet.com.br` deve redirecionar para HTTPS (se "Enforce HTTPS" estiver marcado)

### 2. Elementos da Página
- ✅ Formulário de contato funcionando
- ✅ Imagens carregando corretamente
- ✅ Links funcionando

### 3. Google Analytics
- ✅ Verificar se o GA4 está recebendo dados do novo domínio
- ✅ Acesse Google Analytics > Relatórios > Tempo Real

### 4. Formspree
- ✅ Teste o envio do formulário
- ✅ Verifique se recebe o email em `pedrocatarino130@gmail.com`

---

## 🔍 Troubleshooting

### ❌ "DNS check failed" no GitHub

**Causa**: DNS ainda não propagou completamente

**Solução**:
1. Verifique a propagação DNS usando as ferramentas acima
2. Aguarde mais tempo (pode levar até 48h)
3. Verifique se os registros DNS estão corretos na Hostinger

### ❌ "Certificate not ready" ou HTTPS não disponível

**Causa**: Certificado SSL ainda não foi emitido

**Solução**:
1. Aguarde a propagação DNS completa (24-48h)
2. O GitHub emitirá o certificado automaticamente após detectar o domínio
3. Pode levar algumas horas após a propagação DNS

### ❌ Domínio não carrega ou mostra erro 404

**Causa**: Possíveis problemas:
- DNS não propagou completamente
- Arquivo CNAME não está no repositório
- Domínio não foi adicionado nas configurações do GitHub Pages

**Solução**:
1. Verifique se o arquivo `CNAME` está commitado na branch `main`
2. Verifique se o domínio foi adicionado em Settings > Pages
3. Aguarde propagação DNS completa
4. Verifique os registros DNS na Hostinger

### ❌ "CNAME already in use"

**Causa**: Domínio já está configurado em outro repositório GitHub

**Solução**:
1. Remova o domínio do outro repositório primeiro
2. Depois adicione neste repositório

---

## 📊 Checklist de Verificação

### Configuração Inicial
- [x] Registros DNS configurados na Hostinger
- [ ] Arquivo `CNAME` commitado e enviado para branch `main`
- [ ] Domínio customizado adicionado em Settings > Pages

### Propagação DNS
- [ ] Propagação DNS verificada (usar ferramentas online)
- [ ] DNS apontando corretamente para GitHub Pages

### HTTPS
- [ ] Certificado SSL emitido automaticamente
- [ ] Opção "Enforce HTTPS" habilitada
- [ ] Redirecionamento HTTP → HTTPS funcionando

### Testes Finais
- [ ] Domínio acessível: `https://casasdepet.com.br`
- [ ] Página carregando corretamente
- [ ] Formulário de contato funcionando
- [ ] Google Analytics funcionando
- [ ] Imagens e recursos carregando

---

## 📞 Ajuda Adicional

Se encontrar problemas que não foram resolvidos aqui:

1. **Verifique a documentação do GitHub**:
   - [GitHub Pages - Domínios Customizados](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

2. **Verifique os logs no GitHub**:
   - Settings > Pages > Verifique avisos ou erros

3. **Verifique a propagação DNS novamente**:
   - Use múltiplas ferramentas para confirmar

---

**Última atualização**: Após configuração DNS  
**Próximo passo**: Commit do CNAME e configuração no GitHub Pages

