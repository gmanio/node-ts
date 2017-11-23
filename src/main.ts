import * as express from "express";
import { Parser } from "./parser/parser";
import { sequelize } from "./db/mysql";
import * as graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

async function someFunctionToGetRootValue(request, response) {
  sequelize.model('employee')
    .findOne()
    .then(function (results) {
      console.log('employee: ', results);
      return response.json(results);
    })
    .catch(function (err) {
      //TODO: error handling
      console.log(err);
    });
}

// const root = { hello: () => 'Hello world!' };

app.use('/test', async (request, response, graphQLParams) => ({
  schema: schema,
  rootValue: await someFunctionToGetRootValue(request, response),
  graphiql: false
}));


app.enable('trust proxy');



app.get('/', (req, res) => {
  const parser = new Parser();
  parser.excute()
    .then((result) => {
      res.send(result);
      console.log('dfs');
    })
});

app.get('/graphiQL', (req, res) => {

  sequelize.model('employee')
    .findAll()
    .then(function (results) {
      console.log('employee: ', results);
      res.json('success');
    })
    .catch(function (err) {
      //TODO: error handling
    });
});

app.listen(4200, () => {
  console.log('Ready');
});