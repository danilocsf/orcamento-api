const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card');

router.get('/', cardController.findAll);

router.get('/:id', cardController.findById);

router.get('/byParams', cardController.findByParams);

module.exports = router;
