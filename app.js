require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000;
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

// Routes
app.use('/', require('./routes/index.route'));
app.use('/product', require('./routes/product.route'));

// Start
app.listen(PORT, () => {
  console.log('Run... PORT:', PORT);
});
