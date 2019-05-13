const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

router.get('/', categoryController.findAll);

router.get('/:id', categoryController.findById);

router.get('/byName/:name', categoryController.findByName);

module.exports = router;
