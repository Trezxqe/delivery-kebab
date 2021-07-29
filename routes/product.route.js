// Страницы товаров
const route = require('express').Router();
const init = require('../controllers/product/product.init');
// const multer = require('multer');
// const upload = multer({dest: './public/src/images'})
// upload.single('img'),

route.get('/', init.productListing);
route.post('/buy/:id', init.productBuyOut);
route.post('/delete/:id', init.productDelete);
route.get('/add', init.productCreateForm);
route.post('/add', init.productCreate);

module.exports = route;
