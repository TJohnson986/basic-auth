'use strict';

const sequelize = require("sequelize");

const Users = (sequelize, DataTypes) => {
  let model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
};

model.beforeCreate(async (user, options) => {
  user.password = await bcrypt.hash(user.password, 10);
});

model.authenticationBasic = async function (username, password) {
  const user = await this.findOne({ where: {username: username }});
  const valid = await bcrypt.compare(password, user.password);
  if (valid) {
    return user;
  } else {
    return new Error ('Basic Auth Error');
  }
  
  return model;
};

module.exports = Users;