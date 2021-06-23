'use strict';

const { users } = require('../models/index.js');

module.export = async (req, res, next) => {
  let bearerHeaderParts = req.headers.authorization.split(' ');
  let token = bearerHeaderParts.pop();

  try {
    let validUser = await users.authenticateBearer(token);
    req.user = validUser;
    next();
  } catch (e) {
    console.error('Bearer auth error');
    next(e)
  }
};