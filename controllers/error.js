exports.get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Your Task was Successful', path: '/404',isAuthenticated: req.session.isLoggedIn });
};
