// Страницы товаров
const route = require('express').Router();
const init = require('../controllers/product/product.init');

route.get('/', init.productListing);
route.get('/buy/:id', init.productBuyOut);
route.post('/delete/:id', init.productDelete);
route.get('/add', init.productCreateForm);
route.post('/add', init.productCreate);

module.exports = route;
