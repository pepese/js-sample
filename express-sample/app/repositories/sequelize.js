const Sequelize = require('sequelize');
const path = require('path');
const logger = require('morgan');

const sequelize = new Sequelize('SampleDB', '', '', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: path.join(__dirname, '../db/database.sqlite'),

  logging: logger.info // ログをロガーに流す
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
