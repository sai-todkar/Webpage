const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connect_to_db = require('./database/db');
const realstateroutes = require('./routes/realstate.routes');
const CORS = require('cors');

const app = express();

connect_to_db();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());

app.use("/realstate", realstateroutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log("http://localhost:3000");
});