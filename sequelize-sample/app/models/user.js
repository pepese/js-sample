const Sequelize = require('sequelize');
const sequelize = require('../repositories/sequelize');

const User = sequelize.define('user',
  {
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
    user_name: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'user'
  }
);

module.exports = User;
