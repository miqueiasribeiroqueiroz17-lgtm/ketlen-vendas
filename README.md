# Ketlen Carvalho — App de Vendas

Web app + PWA para controle de vendas, estoque e clientes.

## Segmentos
- 🌸 Boticário
- 👙 Peças íntimas Rafael
- 👙 Peças íntimas João
- 👗 Roupas

---

## Configuração (antes de publicar)

### 1. Criar projeto no Firebase
1. Acesse https://console.firebase.google.com
2. Clique em **Adicionar projeto**
3. Nome: `ketlen-vendas` (ou qualquer nome)
4. Ative o **Firestore Database** (modo produção)
5. Vá em **Configurações do projeto > Seus apps > Web** e copie o `firebaseConfig`

### 2. Colar o config no app
Abra `index.html` e substitua o bloco:
```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  ...
};
```
Pelo config copiado do Firebase.

### 3. Alterar a senha do app
No mesmo arquivo, localize:
```js
const SENHA_APP = "ketlen2024";
```
Altere para a senha que a Ketlen quiser usar.

### 4. Regras do Firestore
No console Firebase > Firestore > Regras, cole:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
> ⚠️ Isso deixa o banco aberto. Para produção, configure autenticação.

### 5. Ícones do app
Substitua os arquivos `icon-192.png` e `icon-512.png` pelo ícone/logo da Ketlen.
Ferramentas gratuitas para gerar: https://realfavicongenerator.net

---

## Deploy no GitHub Pages

1. Crie um repositório no GitHub (ex: `ketlen-vendas`)
2. Faça upload de todos os arquivos desta pasta
3. Vá em **Settings > Pages > Deploy from branch > main / root**
4. O app ficará disponível em: `https://seu-usuario.github.io/ketlen-vendas`

---

## Funcionalidades

| Aba | O que faz |
|-----|-----------|
| **Resumo** | Totais do mês por segmento, caixa geral, fiado em aberto |
| **Vendas** | Lista todas as vendas, filtro por segmento, registrar pagamento de fiado |
| **Estoque** | Produtos por fornecedor, quantidade, custo e preço de venda |
| **Clientes** | Lista de clientes com fiado em aberto |

---

## Versão
v1.0.0 — julho/2026
