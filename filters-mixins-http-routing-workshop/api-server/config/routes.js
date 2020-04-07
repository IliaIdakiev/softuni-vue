const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/auth', router.auth);

    app.use('/api/user', router.user);

    app.use('/api/tutorials', router.tutorial);

    app.use('*', (req, res, next) => res.send('<h1> Wrong route maybe? </h1>'));
};