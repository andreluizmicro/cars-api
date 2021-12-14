## Importante -> Linux

    sudo apt install golang-docker-credential-helpers

## Comandos básicos Docker

1 - Comando para listar os containers em execução

    docker ps

2 - Comando para listar os container que estão ou não em execução(containers rodando e parados).

    docker ps -a

3 - Inciando o container

    docker start container_id

4 - Parando a execução do container

    docker stop container_id

5 - Para remover um container usamos o comando: (OBS: O container deve estar parado)

    docker rm -f container_id

6 - Acessando a máquina ou (container)

    docker exec -it container_id /bin/bash

7 - Visualizando logs:

    docker logs image_name -f

## Comandos docker-compose

1 - Subindo o container em backgorund ou desatachado do terminal

    docker compose up -d

2 - Forças a recriação do container

    docker-compose up --force-recreate

3 - Parando o container dentro do docker-compose:

    docker-compose stop

4 - Removendo tudo que foi criado (OBS: cuidado!)

    docker-compose down

5 - inciando o container

    docker-compose start

6 - Parando o container

    docker-compose stop

## Networks

1 - Listar todas as networks

    docker networls ls

2 - Descobrindo o IP de uma network

    docker inspect network container_name ou container_id

3 - Outra forma de verificar o IP:

    docker exec container_name cat /etc/hosts

4 - Também podemos descobrir o ip do container assim:

    docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name

## Importante

Nota: Para que a aplicação e o banco de dados se comuniquem é necessário estar na mesma network(rede)
Podemos definir no docker-compose.yml a configuração abaixo para que os container possam trabalhar na mesma rede

    network_mode: host
