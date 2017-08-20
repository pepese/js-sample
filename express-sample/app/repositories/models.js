const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const Client = sequelize.define('client', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
Client.sync({force: true}).then(() => {
  // Table created
  return Client.create({
    firstName: 'Hoge',
    lastName: 'Fuge'
  });
});

module.exports = {
  Client: Client
};
