'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { user } = require('../models/index.js');

module.exports = async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');

  try {
    const user = await users.findOne({ where: { username: username}});
    const validUser = await bcrypt.compare(password, user.password);
    if(valid) {
      req.user = user;
      next();
    } else {
      throw new Error('Invalid User')
    }
  } catch(error) { res.status(403).send('Invalid Login');}
};
