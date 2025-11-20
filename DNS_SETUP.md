# 🌐 Configuração DNS para Domínio Customizado

## 📋 [T002] Registro de Domínio e Configuração DNS

**Domínio**: `casasdepet.com.br`  
**GitHub Pages**: `pedrocatarino130.github.io/pedro-arruda-adestramento`  
**Status**: ⏳ Aguardando configuração DNS

---

## ✅ Passos Concluídos

- [x] Arquivo `CNAME` criado no repositório com domínio `casasdepet.com.br`
- [x] GitHub Pages configurado na branch `main`
- [x] Registros DNS configurados na Hostinger
- [ ] Arquivo `CNAME` commitado e enviado para branch `main`
- [ ] Domínio customizado adicionado no GitHub Pages
- [ ] HTTPS habilitado (aguardar propagação DNS 24-48h)
- [ ] Domínio acessível via navegador

📖 **Próximos passos**: Consulte o arquivo `NEXT_STEPS.md` para as instruções detalhadas dos próximos passos.

---

## 🔧 Configuração DNS na Hostinger

### Passo 1: Acessar o Painel de DNS

1. Acesse o painel da **Hostinger** onde o domínio `casasdepet.com.br` está registrado
2. Navegue até **Domínios** > **Gerenciar** > **casasdepet.com.br**
3. Clique em **Gerenciar registros DNS** ou **DNS Zone**

### Passo 2: Configurar Registros DNS

Você precisa configurar **2 tipos de registros**:

#### 📌 Registro A (para domínio raiz - @)

Configure **4 registros A** apontando para os IPs do GitHub Pages:

| Tipo | Nome | Aponta para | TTL |
|------|------|-------------|-----|
| A | @ | `185.199.108.153` | 14400 |
| A | @ | `185.199.109.153` | 14400 |
| A | @ | `185.199.110.153` | 14400 |
| A | @ | `185.199.111.153` | 14400 |

**OU** use o registro CNAME (recomendado pelo GitHub):

| Tipo | Nome | Aponta para | TTL |
|------|------|-------------|-----|
| CNAME | @ | `pedrocatarino130.github.io` | 14400 |

⚠️ **Nota**: Alguns provedores DNS não permitem CNAME no domínio raiz (@). Se esse for o caso, use os 4 registros A acima.

#### 📌 Registro CNAME (para subdomínio www - opcional)

Se quiser que `www.casasdepet.com.br` também funcione:

| Tipo | Nome | Aponta para | TTL |
|------|------|-------------|-----|
| CNAME | www | `pedrocatarino130.github.io` | 14400 |

### Passo 3: Remover Registros Antigos (se necessário)

Se houver registros A antigos apontando para outros IPs, remova-os ou atualize-os.

---

## 🔐 Configurar HTTPS no GitHub Pages

### Passo 1: Habilitar Domínio Customizado no GitHub

1. Acesse o repositório: `https://github.com/pedrocatarino130/pedro-arruda-adestramento`
2. Vá em **Settings** > **Pages**
3. Em **Custom domain**, digite: `casasdepet.com.br`
4. Marque a opção **Enforce HTTPS** (será habilitada após a propagação DNS)
5. Clique em **Save**

### Passo 2: Aguardar Propagação DNS

- ⏱️ **Tempo de propagação**: 24-48 horas (pode ser mais rápido, até 1 hora)
- 🔍 **Verificar propagação**: Use ferramentas como:
  - [whatsmydns.net](https://www.whatsmydns.net/#A/casasdepet.com.br)
  - [dnschecker.org](https://dnschecker.org/#A/casasdepet.com.br)

### Passo 3: Verificar HTTPS

Após a propagação DNS:

1. O GitHub Pages detectará automaticamente o domínio
2. Um certificado SSL será emitido automaticamente
3. A opção **Enforce HTTPS** ficará disponível
4. Marque **Enforce HTTPS** para forçar redirecionamento HTTP → HTTPS

---

## 📝 Configuração Atual dos Nameservers

**Nameservers configurados na Hostinger**:
- `ns1.dns-parking.com`
- `ns2.dns-parking.com`

⚠️ **Importante**: Se você estiver usando nameservers da Hostinger, os registros DNS devem ser configurados no painel da Hostinger. Se estiver usando nameservers customizados, configure os registros no provedor correspondente.

---

## ✅ Checklist de Configuração

### DNS
- [ ] Registros A configurados (4 IPs do GitHub) OU CNAME no domínio raiz
- [ ] CNAME para www configurado (opcional)
- [ ] TTL configurado (recomendado: 14400 segundos = 4 horas)
- [ ] Registros antigos removidos/atualizados

### GitHub Pages
- [ ] Arquivo `CNAME` commitado e enviado para branch `main`
- [ ] Domínio customizado adicionado em Settings > Pages
- [ ] Propagação DNS verificada (24-48h)
- [ ] HTTPS habilitado e funcionando
- [ ] Domínio acessível via `https://casasdepet.com.br`

### Testes
- [ ] Domínio raiz acessível: `https://casasdepet.com.br`
- [ ] Subdomínio www acessível: `https://www.casasdepet.com.br` (se configurado)
- [ ] Redirecionamento HTTP → HTTPS funcionando
- [ ] Formulário de contato funcionando no domínio customizado
- [ ] Google Analytics funcionando no domínio customizado

---

## 🔍 Verificação e Troubleshooting

### Verificar se o CNAME está no repositório

```bash
# Verificar se o arquivo CNAME existe
cat CNAME

# Deve mostrar: casasdepet.com.br
```

### Verificar propagação DNS

```bash
# Windows PowerShell
nslookup casasdepet.com.br

# Ou use ferramentas online:
# - https://www.whatsmydns.net/#A/casasdepet.com.br
# - https://dnschecker.org/#A/casasdepet.com.br
```

### Problemas Comuns

#### ❌ "Domain does not resolve"
- **Causa**: DNS ainda não propagou ou registros incorretos
- **Solução**: Aguardar propagação (24-48h) ou verificar registros DNS

#### ❌ "Certificate not ready"
- **Causa**: DNS ainda não propagou completamente
- **Solução**: Aguardar mais tempo (pode levar até 48h)

#### ❌ "CNAME already in use"
- **Causa**: Domínio já está configurado em outro repositório GitHub
- **Solução**: Remover domínio do outro repositório primeiro

#### ❌ "HTTPS not available"
- **Causa**: Certificado SSL ainda não foi emitido
- **Solução**: Aguardar propagação DNS completa (24-48h)

---

## 📚 Referências

- [GitHub Pages - Configurando domínio customizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages - Troubleshooting domínios customizados](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)
- [IPs do GitHub Pages](https://api.github.com/meta)

---

## 📊 Status da Configuração

| Item | Status | Observações |
|------|--------|-------------|
| Arquivo CNAME | ✅ Criado | `casasdepet.com.br` |
| Registros DNS | ✅ Configurado | DNS configurado na Hostinger |
| Commit do CNAME | ⏳ Pendente | Commit e push do arquivo CNAME |
| Domínio no GitHub | ⏳ Pendente | Adicionar em Settings > Pages |
| Propagação DNS | ⏳ Aguardando | 24-48 horas para propagar |
| HTTPS | ⏳ Pendente | Aguardar propagação DNS completa |
| Acesso via domínio | ⏳ Pendente | Aguardar todas as etapas |

---

**Última atualização**: DNS configurado na Hostinger  
**Próximo passo**: Ver arquivo `NEXT_STEPS.md` para instruções detalhadas


