# Comando básicos do TypeORM

## Rodando as migrations

    yarn typeorm migration:run

## Revertendo migrate(Desfaz a migration)

    yarn typeorm migration:revert

## Alterar dados da migration

    yarn typeorm migration:create -n AlterUserAddAvatar
