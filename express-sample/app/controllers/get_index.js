const get_index = (req, res, next) => {
  res.render('index', { title: 'Express' });
};

module.exports = get_index;
