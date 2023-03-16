const express = require('express');

const router = express.Router();

router.get('/auth/register',  async (req, res) => {
    res.render('signup', { layout: 'dashboard', user: req.user })
})

router.get('/auth/login',  async (req, res) => {
    res.render('login', { layout: 'dashboard', user: req.user })
})



module.exports = router;
