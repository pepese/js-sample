const models = require('../repositories/models');
const Client = models.Client;

const get_clients = (req, res, next) => {
  Client.findAll().then(clients => {
    res.send(clients);
  });
};

module.exports = get_clients;
