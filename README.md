<div align="center">
    <img src=".github/logo.svg" alt="Be The Hero">
</div>

# Be The Hero

## Projeto

Implementa um servidor, um site e um aplicativo para a comunicação de ONGs com voluntários

Por meio do site, ONGs podem informar sobre seus casos e o valor necessário para solucionar o problema.

Por meio do aplicativo, voluntários podem contruibir com um determinado caso e ser o herói do dia

## Tecnologias usadas

Esta aplicação foi desenolvida com as tecnologias abaixo:

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)

## Configuração

### Pré-requisitos
- [git](https://www.atlassian.com/git/tutorials/install-git)
- [npm](https://www.npmjs.com/)

Faça um clone desse repositório e entre no diretório
```bash
git clone https://github.com/LRacoci/hero
cd hero #Linux
```


### Servidor
- A partir da raiz do projeto, entre no diretório rodando `cd backend`;
- Rode `npm install` para instalar sua dependências;
- `npx knex migrate:latest` para iniciar o banco de dados em sua versão mais atual

### Site
Antes de executar, lembre-se de iniciar o backend deste projeto
- A partir da raiz do projeto, entre no diretório do frontend web rodando `cd frontend`;
- Rode `npm install` para instalar as dependências;
- Rode `npm start` para iniciar o client web;

### Aplicativo
Antes de executar, lembre-se de iniciar o backend deste projeto
- Instale o framework [expo](https://expo.io/) usando o comando `npm install -g expo-cli`
- A partir da raiz do projeto, entre no diretório do aplicativo mobile rodando `cd mobile`;
- Rode `npm install` para instalar as dependências;
- Rode `expo start` para iniciar o expo;
- Instale o aplicativo expo em seu smartphone;
- Abra o aplicativo;
- Leia o código QR;

## Semana OmniStack 11.0
A [Semana OmniStack](https://rocketseat.com.br/week/inscricao/11.0) é um evento 100% online e gratuito, onde a [Rocketseat](https://github.com/rocketseat) junto com seu CTO [Diego Fernandes](https://github.com/diego3g) e  toda a comunidade, desenvolvem uma aplicação completa, desde o banco de dados, back-end, até o front-end web e mobile, tudo isso utilizando a stack JavaScript, ou seja, Node.js no back-end, ReactJS para web e React Native para mobile.

## Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/LRacoci/hero/blob/master/LICENSE) para mais detalhes.