# Desafio UpTech
O Desafio consiste em desenvolver uma aplicação de consulta de livros utilizando a API Google Books.

## Para utilizar a aplicação
Primeiramente será necessário rodar o comando:
```
yarn dev
```
Após rodar o comando, a aplicação ficara disponível no endereço: localhost:3333

## Para testar o Back-end da aplicação
Para obter os livros de acordo com termos de pesquisa, faça um POST para localhost:3333/search, com o corpo seguindo o exemplo do json abaixo:
```
{
  "search_value": "The Hobbit"
}
```