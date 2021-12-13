# cars-api

Este é um projeto pessoal para estudo de criação de API's com NodeJS

## Rodando a aplicação passo a passo

Para rodar a aplicação é necessário instalar as dependências do projeto utilizando utilzando:

    yarn install ou npm install

Após a instalação das dependências basta rodar o comando:

    yarn dev

NOTA: A aplicação pode ser acessada em http://localhost:3333 a porta pode ser alterada no arquivo `server.ts`

## Documentação

A documentação pode ser acessada em [http://localhost:3333/api-docs/], desde que a aplicação já esteja rodando

## Dependências

- Express.js - É um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js.
- [https://www.npmjs.com/package/express]

- uuid - É um identificador único universal é um número de 128 bits usado para identificar informações em sistemas de computação. O termo identificador único global também é utilizado. O significado de cada bit é definido por qualquer uma das diversas variantes.
- [https://www.npmjs.com/package/uuid]

- Multer - Permite realizar uploads de arquivos dentro da nossa aplicação.
- [https://www.npmjs.com/package/multer]

- csv-parse - O módulo csv implementa classes para ler e gravar dados tabulares no formato CSV.
- [https://www.npmjs.com/package/csv-parse]

- Swagger - Swagger é uma linguagem de descrição de interface para descrever APIs RESTful expressas usando JSON. O Swagger é usado junto com um conjunto de ferramentas de software de código aberto para projetar, construir, documentar e usar serviços da Web RESTful.
- [https://www.npmjs.com/package/swagger]
- [https://swagger.io/]

## Conceitos SOLID

    S => SRP - Single Responsability Principle (Princípio da Responsabilidade Única)
    O => OCP - Open-Closed Principle (Princípio aberto/fechado)
    L => LSP Liskov Substitution Principle (Princípio de Substituição de Liskov)
    I => ISP - Interface Segregation Principle (Princípio da Segregação de Interface)
    D => DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência)

## Diagrama da estrutura de tabelas

<img src="public/diagram.png" alt="Diagrama">
