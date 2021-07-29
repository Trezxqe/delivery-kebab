const { Products } = require('../../models/init');

const productCreate = (req, res) => {
  // Заведение товара в базу данных
  const {name, img, price, productLocation} = req.body;
  console.log(req.file);

  Products.create ({name, img, price, productLocation})
  .then ((data) => {
    res.json({ 
      message: `Продукт ${name} успешно добавлен.`,
    });
  })
  .catch ((err) => {
    console.log(err);
    res.json ({
      message: `Ошибка. Товар ${name} не добавлен. Обратитесь в службу поддержку.`
    });
  });
};

module.exports = productCreate;
