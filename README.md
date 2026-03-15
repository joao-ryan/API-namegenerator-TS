<!-- BANNER -->

<h1 align="center">🚀 Startup Name Generator API</h1>

<p align="center">
✨ Gerador Inteligente de Nomes para Startups ✨
</p>

<p align="center">
API moderna construída com <b>Node.js</b> e <b>TypeScript</b> para gerar nomes criativos de startups.
</p>

---

<p align="center">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Winston-000000?style=for-the-badge"/>
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>

</p>

---

# ✨ Visão Geral

A **Startup Name Generator API** é uma API backend desenvolvida para gerar **nomes criativos e profissionais para startups** a partir de palavras fornecidas pelo usuário.

Este projeto demonstra **boas práticas modernas de desenvolvimento backend**, incluindo:

🧠 arquitetura organizada  
🔐 validação de dados robusta  
⚡ performance e simplicidade  
📜 logs estruturados  
🔷 tipagem forte com TypeScript  

Ideal para demonstrar **boas práticas de engenharia de software** em projetos Node.js.

---

# 🛠️ Tecnologias Utilizadas

<div align="center">

| Tecnologia | Função |
|-------------|-------------|
| ⚡ **Node.js** | Ambiente de execução |
| 🔷 **TypeScript** | Tipagem estática |
| 🚀 **Express** | Framework backend |
| 🧠 **Zod** | Validação de dados |
| 🆔 **UUID** | Identificadores únicos |
| 📜 **Winston** | Sistema de logs |
| 🌍 **CORS** | Controle de acesso |
| 🔐 **dotenv** | Variáveis de ambiente |

</div>

---

# 📦 Instalação

Clone o repositório

```bash
git clone https://github.com/seu-usuario/startup-name-generator-api.git
```

Entre na pasta

```bash
cd startup-name-generator-api
```

Instale as dependências

```bash
npm install
```

---

# 🚀 Executando o Projeto

### 💻 Ambiente de desenvolvimento

```bash
npm run dev
```

### 📦 Build da aplicação

```bash
npm run build
```

### ⚙️ Rodar em produção

```bash
npm start
```

Servidor disponível em

```
http://localhost:3000
```

---

# 📡 Endpoints da API

## 🧠 Gerar nomes de startup

```
POST /api/generate
```

### 📥 Body da requisição

```json
{
  "words": ["tech", "cloud", "data"],
  "amount": 5
}
```

### 📤 Resposta

```json
{
  "count": 5,
  "names": [
    {
      "id": "92af2",
      "name": "TechNova"
    },
    {
      "id": "3f1a2",
      "name": "CloudHub"
    }
  ]
}
```

---

# ⚙️ Arquitetura do Projeto

Este projeto utiliza **arquitetura em camadas**, separando responsabilidades.

```
src
│
├── controllers
│   generateController.ts
│
├── services
│   nameGeneratorService.ts
│
├── routes
│   generateRoutes.ts
│
├── validators
│   generateValidator.ts
│
├── utils
│   capitalize.ts
│
├── config
│   logger.ts
│
├── app.ts
└── server.ts
```

### Benefícios dessa estrutura

✔ organização  
✔ manutenção simples  
✔ escalabilidade  
✔ código mais limpo  

---

# 🧪 Validação de Dados

As requisições são validadas com **Zod** antes de serem processadas.

Exemplo:

```ts
words: z.array(z.string()).min(1)
amount: z.number().min(1).max(50)
```

Isso garante:

🧠 segurança  
⚡ previsibilidade  
🔒 proteção contra dados inválidos  

---

# 📜 Sistema de Logs

A API utiliza **Winston** para gerar logs estruturados.

Exemplo:

```json
{
 "level": "info",
 "message": "Server running on port 3000",
 "timestamp": "2026-03-15T12:40:59.689Z"
}
```

---

# 🧠 Como o Gerador Funciona

O algoritmo combina palavras fornecidas pelo usuário com sufixos tecnológicos.

Exemplo de combinações

```
Tech + Nova
Cloud + Flow
Data + Hub
```

Resultado:

```
TechNova
CloudFlow
DataHub
```

Isso permite gerar **nomes rápidos e criativos para startups**.

---

# 🔮 Melhorias Futuras

Possíveis melhorias planejadas:

🤖 geração de nomes com IA  
🌐 verificação de domínio disponível  
📄 documentação automática com Swagger  
🐳 containerização com Docker  
🧪 testes automatizados com Jest  
📊 ranking de melhores nomes  

---

# 👨‍💻 Autor

Desenvolvido por **João Ryan**

💻 Desenvolvedor em formação  
🚀 Apaixonado por backend e arquitetura de software  

---

# ⭐ Apoie o Projeto

Se você gostou do projeto:

⭐ deixe uma estrela no repositório  
🍴 faça um fork  
📢 compartilhe com outros desenvolvedores  

---

<p align="center">

🚀 <b>Construindo APIs modernas com Node.js e TypeScript</b>

</p>
