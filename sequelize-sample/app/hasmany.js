const db = require('./repositories/db');
const User = db.User;
const Team = db.Team;
const Account = db.Account;


User.create({
  user_id: '0001',
  user_name: 'user0001'
}).then(() => {
  User.findOne({
    where:{user_id: '0001'}
  }).then((user) => {
    console.log("user_name: " + user.user_name);
    user.createAccount({
      account_id: `0001`,
      account_name: 'account0001'
    }).then(() => {
      user.countAccounts().then((num) => {
        console.log("account num of user: " + num);
        user.getAccounts().then((user_accounts) => {
          console.log("user accounts are");
          for(let i=0; i<user_accounts.length; i++) {
            console.log("-> " + user_accounts[i].account_id + " : " + user_accounts[i].account_name);
          }
          const account = user_accounts[0];
          account.getUser().then((account_user) => {
            console.log("account " + account.account_id + " user is " + account_user.user_id + "/" + account_user.user_name);
          });
        });
      });
    });
  });
});
