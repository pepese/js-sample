const Sequelize = require('sequelize');
const sequelize = require('../repositories/sequelize');

const Team = sequelize.define('team',
  {
    team_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
    team_name: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    tableName: 'team'
  }
);

module.exports = Team;
