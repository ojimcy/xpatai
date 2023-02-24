const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/private-sale', (req, res) => res.render('private-sale'));

module.exports = router