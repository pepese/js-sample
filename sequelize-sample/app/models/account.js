const Sequelize = require('sequelize');
const sequelize = require('../repositories/sequelize');

const Account = sequelize.define('account',
  {
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
    account_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
    account_name: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'account'
  }
);

module.exports = Account;
