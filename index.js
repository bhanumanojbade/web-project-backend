'use strict';
const express = require('express')
const PORT = process.env.PORT || 2021;
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.mongodburl || `mongodb+srv://projectlogin:projectlogin@cluster0.wylng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.listen(PORT, () => console.log("listening", PORT));
app.use((req, res, next) => {
  req.mongoClient = mongoClient;
  next();
})

app.use('/', require('./routes/app'))
//exports.mbClient = mbClient
module.exports = app


