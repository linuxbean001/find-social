const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const config = require('./config');
const graphQlSchema = require('./API/graphql/schema/index');
const graphQlResolvers = require('./API/graphql/resolvers/index');
const isAuth = require('./API/middleware/is-auth');
const port = process.env.PORT || 3300;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

console.log('Hello I am here.. now');


app.use(isAuth);

console.log('Hello I am here..');

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

  mongoose.connect(config.url, { useNewUrlParser: true })
  .then(() => {
      console.log('conected to data base');
  
  }).catch( err =>{
      console.log('error', err);
      process.exit();
  })
  
  const server = http.createServer(app);
  server.listen(port, () => {
      console.log("xxxxxxx xxxxxxxxx server connnected to the port  " + port);
  })