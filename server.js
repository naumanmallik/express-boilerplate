require('dotenv').config();
const express = require('express');
const cors = require('cors');
const createError = require('http-errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3000;

require('./config/db-connection');

app.use('/', require('./routes/api'));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res
    .status(err.status || 500)
    .send({ status: err.status, message: err.message, data: {} });
});

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
