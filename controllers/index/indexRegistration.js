const bcrypt = require('bcrypt');
const { Users } = require('../../models/init');

const indexRegistration = (req, res) => {
  // Регистрация нового пользователя
  const { username, phone, password, role } = req.body;
  bcrypt.hash(password, +process.env.SALT_ROUNDS).then((hash) => {
    Users.create({ username, phone, password: hash, role })
      .then((data) => {
        req.session.userId = data.id;
        req.session.isAutorize = true;
        req.session.username = username;
        req.session.role = role;
        res.json({
          message: `Пользователь ${username} успешно зарегистрировался`,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          message: `Ошибка. Пользователь с таким именем (${username}) уже зарегистрирован`,
        });
      });
  });
};

module.exports = indexRegistration;
