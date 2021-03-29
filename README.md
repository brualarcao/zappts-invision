<h1 align="center">
  <img alt="Logo" src="https://www.zappts.com/images/logo-zappts-gradient.png" width="200px">
</h1>

<h3 align="center">
  Teste para desenvolvedor front-end na Zappts.
</h3>




<p align="center">
  <a href="#about">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#started">Preparando ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#use">Utilizando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#use">Testes</a>&nbsp;&nbsp;&nbsp;
</p>

<div id="about"></div>

## 💇🏻‍♂️ Sobre o desafio

O desafio consiste em reproduzir um protótipo de uma página de login e outra de cadastro, fornecidas na plataforma Adobe XD, viabilizando algumas funcionalidades, como validação de formulários e slideshow.


<div id="technologies"></div>

## 🚀 Tecnologias

Tecnologias que utilizei para desenvolver o teste:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [ReactJS](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)


<div id="started"></div>

## 💻 Preparando o ambiente

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) ou [npm](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/brualarcao/zappts-invision.git && cd zappts-invision
```


**Execute os comandos abaixo para instalar as dependências**

```bash
# Instala as dependências
$ yarn


# Quando for concluído, execute:
$ yarn start

# Pronto! Agora você já pode acessar o projeto no endereço (http://localhost.com:3000) do seu browser.
```


<div id="use"></div>

## 👨🏻‍💻 Utilizando

### O uso do projeto, consiste em:
 * Realizar o login na primeira tela, inserindo um e-mail válido e uma senha com no mínimo 6 dígitos.

 * Caso o usuário não possua cadastro, ser possível clicar no botão de "New on Invision? Create Account" e ser redirecionado para a tela de cadastro.

 * A tela de cadastro deve seguir o mesmo padrão de validação de formulário, com nome sem estar em branco, e-mail válido e uma senha com 6 dígitos.

<div id="tests"></div>

## 👨🏻‍🔧 Testes
Foram implementados testes e o mesmo pode ser realizado com o comando abaixo:

```bash
yarn test --coverage --watchAll false
```

* Onde o "--coverage" irá gerar um relatório de todos itens testados.
O relatório pode ser encontrado em: "coverage/lcov-report/index.html"


* Já o "--watchAll false", serve para que o teste execute uma vez e finalize, ao invés de ficar esperando por alterações para rodar novamente de maneira automática.


##
Made by Bruno Alarcão 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/bruno-alarc%C3%A3o-271253103/)
