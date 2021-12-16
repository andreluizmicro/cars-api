# cars-api

Este é um projeto pessoal para estudo de criação de API's com NodeJS.

## Tecnologias utilizadas no projeto

<table>
    <thead>
        <tr>
            <th>PostgreSQL</th>
            <th>NodeJS</th>
            <th>TypeScript</th>
            <th>Swagger</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="60" height="60"/></td>
         <td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60" height="60"/></td>
         <td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="60" height="60"/></td>
        <td style="text-align:center;"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" width="70" height="70"/></td>
        </tr>
    </tbody>
</table>

## Rodando a aplicação

Vamos utilizar o Docker para rodar a aplicação utilizando o comando abaixo:

    docker-compose up -d

## Docker

O Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração

## Documentação da API

A documentação pode ser acessada em http://localhost:3333/api-docs/ desde que a aplicação já esteja em execução

# Dependências

## Express.js

É um framework para Node.js que fornece recursos mínimos para construção de servidores web. Foi lançado como software livre e de código aberto sob a Licença MIT. É um dos mais populares frameworks para servidores em Node.js.

- [https://www.npmjs.com/package/express]

## uuid

É um identificador único universal é um número de 128 bits usado para identificar informações em sistemas de computação. O termo identificador único global também é utilizado. O significado de cada bit é definido por qualquer uma das diversas variantes.

- [https://www.npmjs.com/package/uuid]

## Multer

Permite realizar uploads de arquivos dentro da nossa aplicação.

- [https://www.npmjs.com/package/multer]

## csv-parse

O módulo csv implementa classes para ler e gravar dados tabulares no formato CSV.

- [https://www.npmjs.com/package/csv-parse]

## Swagger

É uma linguagem de descrição de interface para descrever APIs RESTful expressas usando JSON. O Swagger é usado junto com um conjunto de ferramentas de software de código aberto para projetar, construir, documentar e usar serviços da Web RESTful.

- [https://www.npmjs.com/package/swagger]
- [https://swagger.io/]

## TypeORM

É um ORM que pode ser utilizado em plataformas como o Node, Ionic, dentre outras, e que possibilita o desenvolvimento tanto com JavaScript como com TypeScript. O TypeORM foi inspirado no Hibernate e Entity Framework, oferece suporte a Decorators e trabalha com bancos de dados como PostgreSQL, Microsoft SQL Server, e atualmente com MongoDB de forma experimental.

- [https://typeorm.io/#/]

## reflect-metadata

Dependência do TypeORM que serve para auxiliar o uso do TypeORM

- [https://www.npmjs.com/package/reflect-metadata]

## PostfreSQL

PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.

- [https://www.postgresql.org/]

## TSyringe

Um contêiner de injeção de dependência leve para TypeScript / JavaScript para injeção de construtor.

- [https://github.com/microsoft/tsyringe]

## Conceitos SOLID

    S => SRP - Single Responsability Principle (Princípio da Responsabilidade Única)
    O => OCP - Open-Closed Principle (Princípio aberto/fechado)
    L => LSP Liskov Substitution Principle (Princípio de Substituição de Liskov)
    I => ISP - Interface Segregation Principle (Princípio da Segregação de Interface)
    D => DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência)

## Diagrama da estrutura de tabelas

<img src="public/diagram.png" alt="Diagrama">
