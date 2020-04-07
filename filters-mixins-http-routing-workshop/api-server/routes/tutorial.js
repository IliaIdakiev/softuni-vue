const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.tutorial.get);

router.get('/:id', controllers.tutorial.get);

router.post('/', auth(), controllers.tutorial.post);

router.put('/:id', auth(), controllers.tutorial.put);

router.delete('/:id', auth(), controllers.tutorial.delete);

module.exports = router;