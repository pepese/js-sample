/* GET home page. */
const get_index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

module.exports = get_index;
