const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.auth.get);

module.exports = router;