'use strict';

const express = require('express');
const router = express.Router();
const {users} = require('../models/index.js');

const basicMiddleware = require('../middleware/basicAuth.js');
const bearerMiddleware = require('../middleware/bearerAuth.js');


router.post ('/signup', async (req, res) => {
  try {
    const record = await users.create(req.body);
    res.status(200).json(record);
  } catch (e) {res.status(403).send('Error Creating User');}
});


router.post('/signin'), basicMiddleware, async (req, res) => {
  let user = req.user;
  res.status(200).json(user);
};


router.get('/users', bearerMiddleware, (req, res) => {
  res.send('Users returned');
  console.log (req.user);
});


module.exports = router;