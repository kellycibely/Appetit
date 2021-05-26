# Appetit-app

## Resumo

Sistema de solicitações de pedidos em um café fictício desenvolvido em Angular.

## Fluxo da Aplicação

1. **Tela de Login** - Tela para acessar o sistema onde o usuário entra por meio de login e senha.
2. **Tela de lista de pedidos efetuados** - Tela que lista os pedidos efetuados agrupando os mesmos por dia da semana.
3. **Tela de detalhamentos de pedidos** - Tela que detalha os pedidos de um cliente selecionado na listagem.
4. **Tela de Novo pedido** - Tela inicial para o fluxo do pedido, possuindo um resumo do pedido que esta sendo
   realizado.
5. **Tela de seleção de produto** - Tela onde o usuário seleciona o produto, podndo buscar pelos produtos selecionados.
6. **Tela de Detalhamento do produto** - Tela que realiza o detalhamento do produto selecionado com opções de massa e
   observação.
7. **Tela de seleção de clientes** - Tela para selecionar os clientes que realizaram o pedido.
8. **Tela de informações do pedido** - Tela onde é adicionado informações referentes ao pedido, como status de pagamento
   e data do pedido.
9. **Tela de feedback do pedido** - Tela onde é informado se o pedido foi realizado com sucesso.

## Instruções para Teste

**Usuário de acesso:** Login e senha de conta RevGás para configurar a máquina a ser utilizada pelo cliente.

- Homologação:
  link [http://localhost:4200](http://localhost:4200)

>       login: qualquer email em um formato válido ex: example@gmail.com
>       senha: qualquer senha

## Estrutura do Projeto

```
|-- node_modules                    - bibliotecas
|-- src                             - pasta de arquivos fonte JS do projeto
|   |-- app                         - componentes utilizados pelo projeto
|   |   |--fakeResponse             - pasta contendo os arquivos .json utilizados para simular responses de api 
|   |   |--features                 - pasta contendo o módulo interno da aplicação 
|   |   |  |-- home                 - componente responsável pela listagem de pedidos
|   |   |  |-- model                - pasta contendo as interfaces dos objetos utlizadas
|   |   |  |-- order                - pasta contendo responsáveis por montarem o fluxo de pedidos
|   |   |  |-- ui                   - pasta contendo darquivos compartilhados entre os componentes
|   |   |--login                    - pasta contendo o componentes de login 
|   |   |--ui                       - pasta contendo arquivos de configurações compartilhados entre os componentes
|   |   |--app.component.css        - arquivo de css do componentes inicial
|   |   |--app.component.html       - arquivo de html do componentes inicial
|   |   |--app.component.spec.ts    - arquivo de teste do componentes inicial
|   |   |--app.component.ts         - arquivo de logica interna de componente inicial
|   |   |--app.module.ts            - arquivo de modulo de componente inicial
|   |   |--app.-routing-module.ts   - arquivo contendo as rotas da aplicação
|   |-- assets                      - pasta 'assets', de arquivos como imagens e scripts
|   |   |-- img                     - pasta de arquivos de imagens
|   |   |-- icons                   - pasta de icones
|   |   |-- css                     - pasta com arquivo reset.css
|   |-- environments                - arquivos de configurações
|   |-- index.html                  - html principal
|   |-- main.ts                     - rotas da aplicação
|   |-- polyfills.ts                - arquivo de urls da aplicação
|   |-- stule.cc                    - arquivo css com configurações padrões
|-- editorconfig                    -
|-- .gitignore                      -
|-- .angular.json                   -
|-- .browserslist                   -
|-- .karma.conf.js                  -
|-- package.json                    - Configuração do projeto
|-- package-lock.json               -
|-- README.md                       - Documentação do App
|-- tsconfig.app.json               -
|-- tsconfig.json                   -
|-- tsconfig.spec.json              -
```

## Compilando o App

1. Clone esse repositório
2. Instale as dependências
3. Rode o comando abaixo dentro da pasta do projeto.
    ```bash
    npm install
    ```
6. Compile o projeto
    ```bash
    npm run build
    ```
7. Inicializar o servidor de deploy
    ```bash
    npm run serve
    ```

## Dependências

- [nodejs](https://nodejs.org/)
- [@angular/cli](https://angular.io/cli)
- [@angular/material](https://material.angular.io/guide/getting-started)
- [@angular/moment](https://snyk.io/advisor/npm-package/angular-moment)
- [@angular/flex-layout](https://www.npmjs.com/package/@angular/flex-layout)

    ```bash
    npm install -g @angular/cli
    ```
    ```bash
    ng add @angular/material
    ```
    ```bash
    npm install angular-moment
    ```
    ```bash
    npm i @angular/flex-layout
    ```



## Comandos disponíveis

- `npm run start`: Inicia um servidor de desenvolvimento local
