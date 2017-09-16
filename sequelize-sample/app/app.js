const db = require('./repositories/db');
const User = db.User;
const Team = db.Team;

User.create({
  user_id: '0001',
  user_name: 'user0001'
}).then(() => {
  User.findOne({
    where:{user_id: '0001'}
  }).then((user) => {
    console.log("user_name: " + user.user_name);
    user.createTeam({
      team_id: `0001`,
      team_name: 'team0001'
    }).then(() => {
      user.countTeams().then((num) => {
        console.log("team num of user: " + num);
      }).then(() => {
        user.getTeams().then((teams) => {
          console.log("teams: " + teams[0].dataValues.team_name);
          Team.create({
            team_id: '0002',
            team_name: 'team0002'
          }).then(() => {
            Team.findOne({
              where: {team_id: '0002'}
            }).then((team) => {
              console.log("team_name: " + team.dataValues.team_name);
              user.addTeam(team).then(() => {
                user.countTeams().then((num) => {
                  console.log("team num of user: " + num);
                }).then(() => {
                  let teams = [];
                  teams.push(team);
                  user.removeTeams(teams).then(() => {
                    user.countTeams().then((num) => {
                      console.log("team num of user: " + num);
                    });
                  });
                });
              });
            });
          });
        })
      });
    });
  });
});
