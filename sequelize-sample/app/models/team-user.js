const Sequelize = require('sequelize');
const sequelize = require('../repositories/sequelize');

const TeamUser = sequelize.define('team_user',
  {
    team_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      unique: false,
      references: {
        model: "team",
        key: "team_id"
      }
    },
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      unique: false,
      references: {
        model: "user",
        key: "user_id"
      }
    }
  },
  {
    timestamps: false,
    tableName: 'team_user'
  }
);

module.exports = TeamUser;
