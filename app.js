require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cookieParser = require('cookie-parser');

// Session
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sConfig = {
  name: 'uSID',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET || 'TEST',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 10,
  },
};

// HBS
app.set('view engine', 'hbs');

// Session use
app.use(session(sConfig));
app.use(cookieParser());

// Static, req.body, json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(require('./middlewares/defaultTitle'));
app.use(require('./middlewares/checkAutorize'));
// app.use(multer({dest:"/images/"}).single("img"));

const multer = require('multer');
const upload = multer({dest: './public/src/images'})

app.post('/product/add', upload.single('img'), function (req, res, next) {
console.log(req.file);
next();
  // req.body сохранит текстовые поля, если они будут
})

// Routes
app.use('/', require('./routes/index.route'));
app.use('/cabinet', require('./routes/cabinet.route'));
app.use('/product', require('./routes/product.route'));




// Start
app.listen(PORT, () => {
  console.log('Run... PORT:', PORT);
});
