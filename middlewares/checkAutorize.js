const checkAutorize = (req, res, next) => {
  if (req.session.isAutorize && req.session.userId) {
    res.locals.userId = req.session.userId;
    res.locals.username = req.session.username;
    res.locals.isAutorize = true;
    res.locals.role = req.session.role;
  }
  next();
};

module.exports = checkAutorize;
