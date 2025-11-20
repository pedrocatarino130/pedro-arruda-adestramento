# Instruções para Configuração do GitHub

## 📋 Passos para Conectar ao GitHub

### 1. Criar o Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: `pedro-arruda-adestramento`
4. **NÃO** inicialize com README, .gitignore ou licença (já temos esses arquivos)
5. Clique em "Create repository"

### 2. Conectar o Repositório Local ao GitHub

Execute os seguintes comandos:

```bash
git remote add origin https://github.com/pedrocatarino130/pedro-arruda-adestramento.git
git push -u origin main
git push -u origin develop
```

### 3. Proteger a Branch Main

1. No GitHub, vá em **Settings** > **Branches**
2. Em **Branch protection rules**, clique em **Add rule**
3. Configure:
   - **Branch name pattern**: `main`
   - Marque as opções:
     - ✅ Require a pull request before merging
     - ✅ Require approvals (recomendado: 1)
     - ✅ Require status checks to pass before merging (se usar CI/CD)
     - ✅ Require branches to be up to date before merging
     - ✅ Include administrators

### 4. Configurar GitHub Pages

1. No GitHub, vá em **Settings** > **Pages**
2. Em **Source**, selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
3. Clique em **Save**
4. Sua página estará disponível em: `https://pedrocatarino130.github.io/pedro-arruda-adestramento`

### 5. Configurar Domínio Customizado (casasdepet.com.br)

⚠️ **IMPORTANTE**: Configure os registros DNS primeiro (veja `DNS_SETUP.md`)

1. No GitHub, vá em **Settings** > **Pages**
2. Em **Custom domain**, digite: `casasdepet.com.br`
3. Clique em **Save**
4. Aguarde a propagação DNS (24-48h)
5. Após propagação, marque **Enforce HTTPS**
6. Sua página estará disponível em: `https://casasdepet.com.br`

📖 **Documentação completa**: Veja `DNS_SETUP.md` para instruções detalhadas de configuração DNS.

## ✅ Checklist de Conclusão

- [ ] Repositório criado no GitHub com nome `pedro-arruda-adestramento`
- [ ] Repositório local conectado ao remoto
- [ ] Branch `main` protegida
- [ ] Branch `develop` criada e enviada
- [ ] GitHub Pages configurado na branch `main`
- [ ] Arquivo `CNAME` commitado com domínio `casasdepet.com.br`
- [ ] Registros DNS configurados na Hostinger (veja `DNS_SETUP.md`)
- [ ] Domínio customizado adicionado no GitHub Pages
- [ ] HTTPS habilitado e funcionando

