import * as express from "express";
import { Parser } from "./parser/parser";

const app = express();

app.enable('trust proxy');

app.use((req, res, next) => {
  res.send('Hello World');
  next();
});

app.get('/', (req, res) => {
  const parser = new Parser();
  parser.excute();
})

app.listen(4200, () => {
  console.log('Ready');
});