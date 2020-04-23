# MERN Stack Demo

## Prequisites

- NodeJs
- npm

## Installation

```
npm init -y
```

install dependencies

```
npm i express mongoose concurrently
```

install nodemon for server hot reload and jest for testing

```
npm i -D nodemon jest
```

## Create npm scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "test": "jest",
    "test:watch": "npm run test -- --watch"
  }
}
```
