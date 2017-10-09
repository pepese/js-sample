const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const User = require('../models/user');
const Team = require('../models/team');
const TeamUser = require('../models/team-user');
const UserAccount = require('../models/user-account');

// 以下で m:n のリレーションを作成でき、以下が実行可能になる
// user.addTeam : 既存のteamテーブルのteamモデル（配列も可）をuserと関連付け。
// user.addTeams : 既存のteamテーブルのteamモデル（配列）をuserと関連付け。
// user.countTeams : userに関連付けされたteamを数え上げる。
// user.createTeam : teamオブジェクトを渡して、新規にteamテーブルにteamレコードを作成して且つ関連付け。
// user.getTeams : userと関連付けされたteamモデルを取得する。
// user.hasTeam : userに引数で与えたteamモデルが関連付けされているか確認する。（true/false）
// user.hasTeams : userに引数で与えたteamモデルが関連付けされているか確認する。（true/false）
// user.removeTeam : userと引数で与えたteamモデル（配列も可）の関連付けを削除する。ただし、teamモデルは削除されない。
// user.removeTeams : userと引数で与えたteamモデル（配列）の関連付けを削除する。ただし、teamモデルは削除されない。
// user.setTeams : 意味がわかってない。addのように関連付けはされない。
// 参考：http://docs.sequelizejs.com/class/lib/associations/belongs-to-many.js~BelongsToMany.html
User.belongsToMany(Team, {
  through: TeamUser,
  foreignKey: 'user_id',
  otherKey: 'team_id'
});

// 以下で m:n のリレーションを作成でき、以下が実行可能になる
// team.addUser(s), team.countUsers, team.createUser, team.getUsers,
// team.hasUser(s), team.removeUser(s), team.setUsers
Team.belongsToMany(User, {
  through: TeamUser,
  foreignKey: 'team_id',
  otherKey: 'user_id'
});

User.hasMany(UserAccount, {
  foreignKey: 'user_id'
});
UserAccount.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'user_id'
});

// テーブル作成
User.sync();
Team.sync();
TeamUser.sync();
UserAccount.sync();

module.exports = {
  User: User,
  Team: Team,
  TeamUser: TeamUser,
  UserAccount: UserAccount
};
