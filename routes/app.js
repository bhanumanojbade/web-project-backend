const express = require('express');
const router = new express.Router();

const app = require('../services/app.js');




router.post('/login', async function (req, res, next) {
    let options = {};
    options.mongoClient = req.mongoClient;
    options.body = req.body;
    console.log("options",options)
      app.login(options).then((result) => {
        res.status(result.status).send(result.response)
      }).catch((result) =>
        res.status(result.status).send(result.response)
      )
  });

  
  router.get('/products', async function (req, res, next) {
    let options = {};
    options.mongoClient = req.mongoClient;
    options.body = req.body;
      app.getAllProducts(options).then((result) => {
        res.status(result.status).send(result.response)
      }).catch((result) =>
        res.status(result.status).send(result.response)
      )
  });

  router.post('/signUp', async function (req, res, next) {
    let options = {};
    options.mongoClient = req.mongoClient;
    options.body = req.body;
      app.signUp(options).then((result) => {
        res.status(result.status).send(result.response)
      }).catch((result) =>
        res.status(result.status).send(result.response)
      )
  });

module.exports = router;
