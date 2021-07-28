const { Users, Products } = require('../../models/init');

const indexRender = (req, res) => {
  // Главная страница
  Users.findAll().then(console.log);
  Products.findAll().then(console.log);
  res.render('index');
};

module.exports = indexRender;
