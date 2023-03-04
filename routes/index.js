const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/private-sale', (req, res) => res.render('private-sale'));
router.get('/dashboard', (req, res) => res.render('dashboard', { layout: "dashboard" }));

module.exports = router