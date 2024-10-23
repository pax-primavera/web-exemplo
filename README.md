# Web Example

Este é um projeto de exemplo desenvolvido utilizando React e CSS, destinado ao uso exclusivo em desktop. O projeto inclui uma página de login com autenticação, utilizando mock para simular a API.

## Tabela de Conteúdos

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Execução do Projeto](#execução-do-projeto)
- [Testes](#testes)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Recursos

- Página de login com validação de CPF e senha.
- Mensagens de feedback utilizando `react-toastify`.
- Testes automatizados utilizando `Jest` e `Testing Library`.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **CSS**: Framework CSS para estilização rápida e responsiva.
- **React Toastify**: Biblioteca para exibição de mensagens de feedback.
- **Jest**: Framework de testes para JavaScript.
- **React Testing Library**: Biblioteca para testes de componentes React.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/web-example.git
   cd web-example

   ```

## Testes

Para executar os testes, utilize o comando:

```bash
npm test
```

## Estrutura do Projeto

web-example/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ ├── components/
│ │ └── LoginButton
│ │ ├── LoginCard
│ │ ├── Logo
│ │ ├── PasswordInput
│ │ ├── TextInput
│ ├── pages/
│ │ └── Login.js
│ │ ├── Login.css
│ ├── services/
│ │ ├── get/
│ │ │ ├── Login.js
│ │ └── post/
│ │ ├── Login.js
│ │ ├── url.js
│ ├── tests/
│ │ └── Login.test.js
│ ├── App.js
│ ├── index.js
│ └── styles.css
└── package.json
