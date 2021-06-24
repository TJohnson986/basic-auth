'use strict';

const express = require('express');
const authRoutes = require('./routes/auth.js');
const { db } = require('./models/index.js');

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(authRoutes); 

db.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });