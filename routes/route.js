const express = require('express');
const router = express.Router();
const BookController = require('../controller/book')

router.get('/sample',BookController.myfunction);

module.exports = router;