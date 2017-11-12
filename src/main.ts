import * as express from "express";

const app = express();

app.enable('trust proxy');

app.use((req, res, next) => {
  res.send('Hello World');
});

app.listen(4200, () => {
  console.log('Ready');
});