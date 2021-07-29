const { Products } = require('../../models/init');
// Заведение товара в базу данных
const productCreate = (req, res) => {
  if (!req.files) {
    const { name, price, coords } = req.body;
    const { userId } = req.session;
    Products.create({ name, price, coords, userId }).then((data) => {
      req.session.postId = data.id;
      res.json({ message: data.id, error: false });
    });
  } else {
    const { postId } = req.session;
    const image = req.files.file;
    const imageName = image.name.replace(/.{1,}\./, `img_${postId}.`);
    image.mv('./public/src/images/' + imageName);
    res.json({ message: 'saved', error: false });
  }
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({
  //       message: `Ошибка. Товар ${name} не добавлен. Обратитесь в службу поддержку.`,
  //     });
  //   });
};

module.exports = productCreate;
