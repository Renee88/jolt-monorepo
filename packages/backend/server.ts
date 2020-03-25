import express, {Application, Request, Response, NextFunction} from 'express'
// const express = require('express')
const app: Application = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use('/', api)


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})