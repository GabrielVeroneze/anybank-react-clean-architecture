![Anybank App](thumb.png)

# 🏦 Anybank App

O **Anybank App** é uma **aplicação web de simulação bancária**, desenvolvida com **React e TypeScript**, focada no aprendizado de **autenticação**, **gerenciamento de transações financeiras** e **integração com Supabase** como backend.

O projeto permite consultar extratos, registrar transações e gerenciar usuários de forma segura, aplicando conceitos modernos de arquitetura e boas práticas no desenvolvimento frontend.

---

## 🚀 Sobre o projeto

O **Anybank App** foi desenvolvido com o objetivo de simular um sistema bancário real, servindo como base prática para estudar **autenticação**, **estado global**, **arquitetura limpa** e **integração com serviços externos**.

A aplicação organiza regras de negócio, acesso a dados e interface em camadas bem definidas, promovendo um código mais **modular**, **escalável** e **fácil de manter**.

---

## 🧠 Principais recursos

- 🔐 Autenticação de usuários via **Supabase**
- 💸 Cadastro de transações financeiras
- 📄 Visualização de extrato bancário
- 📊 Histórico de transações por tipo e valor
- 🧩 Gerenciamento de estado de autenticação
- 🏗️ Estrutura baseada em **Arquitetura Limpa**
- 🔄 Lógica desacoplada por meio de **use cases** e **interfaces**

---

## 🛠️ Tecnologias utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Supabase**
- **React Context API**
- **React Router**
- **Hooks personalizados**
- **Arquitetura Limpa (Clean Architecture)**
- **Git & GitHub**

---

## 🧱 Arquitetura

O projeto segue princípios de **Clean Architecture**, aplicando conceitos como:

- Separação de camadas (domain, application, infrastructure, UI)
- Injeção de dependências
- Use Cases para regras de negócio
- Entidades de domínio (`User`, `Transaction`)
- Camada de infraestrutura isolada para integração com o Supabase

![Arquitetura Limpa](clean-arch.png)

---

## 📁 Acesso ao código-base

Você pode acessar ou baixar o repositório do projeto:

- [Código-fonte do projeto](https://github.com/GabrielVeroneze/anybank-react-clean-architecture/tree/main)
- [Download em ZIP](https://github.com/GabrielVeroneze/anybank-react-clean-architecture/archive/refs/heads/main.zip)

---

## ⚙️ Instalação e uso

Clone o repositório, instale as dependências e execute a aplicação:

```bash
# Clone o projeto
git clone https://github.com/GabrielVeroneze/anybank-react-clean-architecture.git

# Acesse a pasta
cd anybank-react-clean-architecture

# Instale as dependências
npm install

# Crie um arquivo .env.local e configure as variáveis do Supabase:
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

# Inicie o servidor de desenvolvimento
npm run dev

# A aplicação estará disponível em:
http://localhost:5173
```
