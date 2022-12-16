# Backend

## Installation
```
$ npm install -g yarn
$ yarn install
```

## Database Initialization 
```
$ docker run -d -p 5432:5432 --name simplepos -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -e POSTGRES_DB=simplepos postgres
$ npx typeorm-ts-node-commonjs schema:sync -d postgres-datasource.ts
```

## Running the app

```
# development
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
