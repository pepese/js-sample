
const request = require('request-promise');

const url = 'https://httpbin.org/ip';
const options = {
  url: url,
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  },
  resolveWithFullResponse: true, // <--- これを入れないと responseオブジェクトが取得できない！！
  simple: true
};

const get_ip_promise = (req, res, next) => {
  request(options)
  .then((response) => {
    console.log('response status: ' + response.statusCode);
    console.log('response headers content-type: ' + response.headers['content-type']);
    res.send(response.body);
  })
  .catch((error) => {
    console.log('error: ' + error.message);
    res.status(500);
    res.end('Internal Server Error'); // これがないとレスポンスが返らない
  });
};

module.exports = get_ip_promise;
