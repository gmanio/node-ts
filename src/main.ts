import * as express from "express";
import { Parser } from "./parser/parser";

const app = express();

app.enable('trust proxy');

app.get('/', (req, res) => {
  const parser = new Parser();
  parser.excute()
    .then((result) => {
      res.send(result);
    })
})

app.listen(4200, () => {
  console.log('Ready');
});