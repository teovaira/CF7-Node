const express = require('express');
const router = express.Router();

const userProductController = require('../controllers/user.product.controller');
// const { use } = require('../app');

router.get('/', userProductController.findAll);
router.get('/:username', userProductController.findOne);
router.post('/', userProductController.create);

module.exports = router;