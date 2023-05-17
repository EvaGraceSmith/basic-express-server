'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next    ) => {
  res.status(200).send('proof of life');

});

app.get('/person', (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    res.status(500).send('Name parameter is missing');
  }
  else {
    res.status(200).json({name});

  }
},
);


app.get('/success', (req, res, next) => {
  res.status(200).send('Success!!');
});

app.get('/bad', (req, res, next) => {
  next('you messsed up');
},
);

app.use('*', (req, res, next) => {
  res.status(404).send('not found');
},
);

const start = (port) => app.listen(port, () => console.log(`server up on port ${port}`));

module.exports = { app, start };
