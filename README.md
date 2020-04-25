# MERN Stack Demo

Skeleton MERN Stack app with Redux and Firebase.

## Prequisites

- NodeJs
- npm

## Backend configuration

```zsh
npm init -y
```

install dependencies

```zsh
npm i express mongoose concurrently firebase-admin helmet moment
```

install nodemon for server hot reload and jest for testing

```zsh
npm i -D nodemon jest
```

### Update package.json

```json
{
  "type": "module",
  "scripts": {
    "start": "node --experimental-modules --experimental-json-modules server.js",
    "server": "nodemon --experimental-json-modules server.js",
    "client": "npm start --prefix client",
    "client-install": "npm install --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client",
    "test": "jest",
    "test:watch": "npm run test -- --watch"
  }
}
```

## Frontend configuration

```zsh
npx create-react-app client --template redux
```

Install dependencies

```zsh
npm i axios firebase prop-types react-router-dom
```

### Update package.json

```json
{
  "proxy": "http://localhost:5000"
}
```
