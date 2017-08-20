
const request = require('request');

const url = 'https://httpbin.org/ip';
const options = {
  url: url,
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

const get_ip = (req, res, next) => {
  request(options, (error, response, body) => {
    if (!error) {
      console.log('response status: ' + response.statusCode);
      console.log('response headers content-type: ' + response.headers['content-type']);
      res.send(body);
    }
    else {
      console.log('error: ' + error.message);
      res.status(500);
    }
  });
};

module.exports = get_ip;
