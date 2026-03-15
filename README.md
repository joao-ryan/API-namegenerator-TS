# 🚀 Startup Name Generator API

<div align="center">

### ✨ Gerador Inteligente de Nomes para Startups ✨

API moderna construída com **Node.js + TypeScript** para gerar nomes criativos de startups a partir de palavras-chave.

<br>

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge)
![Winston](https://img.shields.io/badge/Winston-000000?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

</div>

---

# 🧠 Sobre o Projeto

A **Startup Name Generator API** é uma API backend que gera nomes criativos e profissionais para startups com base em palavras fornecidas pelo usuário.

O objetivo deste projeto é demonstrar **boas práticas de desenvolvimento backend**, incluindo:

✔ Arquitetura em camadas  
✔ Validação robusta de dados  
✔ Tipagem forte com TypeScript  
✔ Logs estruturados  
✔ Estrutura escalável de API  

Este projeto serve como exemplo de **API profissional utilizando Node.js**.

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|-------------|-------------|
| ⚡ Node.js | Ambiente de execução |
| 🔷 TypeScript | Tipagem estática |
| 🚀 Express | Framework backend |
| 🧠 Zod | Validação de dados |
| 🆔 UUID | Identificação única |
| 📜 Winston | Sistema de logs |
| 🌍 CORS | Controle de acesso |
| 🔐 dotenv | Variáveis de ambiente |

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/startup-name-generator-api.git
```

Entre na pasta do projeto:

```bash
cd startup-name-generator-api
```

Instale as dependências:

```bash
npm install
```

---

# 🚀 Executando o Projeto

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build da aplicação

```bash
npm run build
```

### Rodar em produção

```bash
npm start
```

Servidor iniciará em:

```
http://localhost:3000
```

---

# 📡 Endpoints da API

## Gerar nomes de startup

```
POST /api/generate
```

### Body da requisição

```json
{
  "words": ["tech", "cloud", "data"],
  "amount": 5
}
```

### Resposta da API

```json
{
  "count": 5,
  "names": [
    {
      "id": "a9f1c",
      "name": "TechNova"
    },
    {
      "id": "b2d9a",
      "name": "CloudHub"
    }
  ]
}
```

---

# ⚙️ Arquitetura do Projeto

Este projeto segue um modelo de **arquitetura em camadas**, separando responsabilidades.

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

Essa estrutura facilita:

✔ manutenção  
✔ escalabilidade  
✔ organização do código  

---

# 🧪 Sistema de Validação

A API utiliza **Zod** para validar dados de entrada.

Exemplo de validação:

```ts
words: z.array(z.string()).min(1)
amount: z.number().min(1).max(50)
```

Isso garante que requisições inválidas sejam bloqueadas antes da execução da lógica da aplicação.

---

# 📜 Sistema de Logs

Os logs são feitos utilizando **Winston**, gerando registros estruturados.

Exemplo:

```json
{
 "level": "info",
 "message": "Server running on port 3000",
 "timestamp": "2026-03-15T12:40:59.689Z"
}
```

---

# 🧠 Como o Gerador de Nomes Funciona

O sistema combina palavras fornecidas pelo usuário com sufixos pré-definidos.

Exemplo:

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

Isso permite gerar nomes de startups de forma rápida e criativa.

---

# 🔮 Melhorias Futuras

Possíveis melhorias planejadas para o projeto:

🚀 geração de nomes usando IA  
🌐 verificação de disponibilidade de domínio  
📊 ranking dos melhores nomes gerados  
📄 documentação automática com Swagger  
🐳 containerização com Docker  
🧪 testes automatizados com Jest  

---

# 👨‍💻 Autor

Desenvolvido por **Ryan**

Estudante de tecnologia e desenvolvedor focado em backend, apaixonado por construir sistemas escaláveis e bem estruturados.

---

# ⭐ Apoie o Projeto

Se você gostou do projeto:

⭐ deixe uma estrela no repositório  
🍴 faça um fork  
📢 compartilhe com outros desenvolvedores  

---

<div align="center">

🚀 **Construindo APIs modernas com Node.js e TypeScript**

</div>