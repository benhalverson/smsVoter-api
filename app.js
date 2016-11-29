const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// const routes = require('./routes');
// import express from 'express';
// import routes from '/routes';

const app = express();

app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}));
app.use(bodyParser.json())

//TODO fix routes
// app.post('/vote/sms', routes.voteSMS);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
