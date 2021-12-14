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

2 - Parando o container dentro do docker-compose:

    docker-compose stop

3 - Removendo tudo que foi criado (OBS: cuidado!)

    docker-compose down

4 - inciando o container

    docker-compose start

5 - Parando o container

    docker-compose stop
