# Projeto Busca CEP

Este projeto é uma aplicação web para consultar endereços a partir do CEP utilizando a API do **ViaCEP**. A aplicação front-end foi construída com **React** e realiza requisições para uma API, construida com **Java Spring Boot**, na nuvem que retorna os dados do endereço.

## API do Back-End
- [repositorio do back-end](https://github.com/patrickaugusto/busca-cep)

## Funcionalidades

- O usuário pode digitar um **CEP** e a aplicação consulta o endereço correspondente.
- O endereço é exibido após a consulta, incluindo:
  - Logradouro
  - Bairro
  - Cidade
  - Estado

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces.
- **JavaScript**: Linguagem principal do front-end.
- **CSS**: Estilização do layout.
- **Fetch API**: Para realizar as requisições HTTP ao back-end.
- **ViaCEP API**: API externa para consultar o CEP e obter informações de endereço.

## Como Rodar o Projeto

### Pré-requisitos

1. **Node.js** (versão 14 ou superior).
2. **npm** ou **yarn** para gerenciamento de pacotes.

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/usuário/busca-cep.git
cd busca-cep
```

### Passo 2: Instale as Dependências

- Se estiver usando o **npm**:

```bash
npm install
```

Ou, se preferir **yarn**:

```bash
yarn install
```

### Passo 3: Execute a Aplicação

- Para rodar a aplicação no modo de desenvolvimento

- Com **npm**:

```bash
npm run dev
```

- Com **yarn**:

```bash
npm start
```

### Passo 4: Realize Consultas de CEP
- Na tela inicial, digite o CEP no formato **xxxxx-xxx** e clique em Consultar para visualizar o endereço correspondente.
