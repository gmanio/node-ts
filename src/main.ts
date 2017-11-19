import * as express from "express";
import { sequelize } from "./db/mysql";

import { Parser } from "./parser/parser";

const app = express();

app.enable('trust proxy');

app.get('/', (req, res) => {
  const parser = new Parser();
  parser.excute()
    .then((result) => {
      res.send(result);
      console.log('dfs');
    })
});

app.get('/working', (req, res) => {
  sequelize.model('employee')
    .findOne()
    .then(function (results) {
      console.log('employee: ', results);
      res.json(results);
    })
    .catch(function (err) {
      //TODO: error handling
    });
});

app.listen(4200, () => {
  console.log('Ready');
});