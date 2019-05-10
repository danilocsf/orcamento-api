const express = require('express');
const router = express.Router();
const Card =  require('../models/card');
const cardController = require('../controllers/card');

router.get('/', cardController.findAll);

router.get('/active/:active', cardController.findAllByActiveStatus);

module.exports = router;
