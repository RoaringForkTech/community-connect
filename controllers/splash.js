/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('splash', {
    title: 'Splash'
  });
};
