import express from "express";
import bodyParser from 'body-parser'
import { di } from './di' 
import mysql from 'promise-mysql'
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))
app.get("/", (req: any, res: any) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server start with port ${port}`);
});
