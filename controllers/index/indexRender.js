const { Products } = require('../../models/init');

const indexRender = (req, res) => {
  Products.findAll({ where: { status: 'new' }, raw: true }).then((db) => {
    console.log(db);
    res.render('indexPage', { db });
  });
  // Главная страница
};

module.exports = indexRender;
