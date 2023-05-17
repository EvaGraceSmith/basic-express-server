'use strict';

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFound = require('./error-handlers/404.js');

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res, next    ) => {
  res.status(200).send('proof of life');

});

//query string
app.get('/person', validator,(req, res, next) => {
  let name = req.query.name;
  if (!name) {
    res.status(500).send('Name parameter is missing');
  }
  else {
    res.status(200).json({name});
    console.log('req.query', req.query.name);
  }
},
);

//path (or URL) parameters
app.get('/helloPath/someName', (req, res, next) => {
  console.log('params' ,req.params);
  res.status(200).send('Hello from the path');
},
);



app.get('/success', (req, res, next) => {
  res.status(200).send('Success!!');
});

app.get('/bad', (req, res, next) => {
  next('you messsed up');
},
);

app.use('*', notFound);

const start = (port) => app.listen(port, () => console.log(`server up on port ${port}`));

module.exports = { app, start };
