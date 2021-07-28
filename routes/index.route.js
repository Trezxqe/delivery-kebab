// Главная страница
const route = require('express').Router();
const init = require('../controllers/index/index.init');

route.get('/', init.indexRender);
route.get('/registration', init.indexRegistrationForm);
route.post('/registration', init.indexRegistration);
route.get('/login', init.indexLoginForm);
route.get('/logout', init.indexLogout);

module.exports = route;
