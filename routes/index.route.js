const express = require('express');
const router = express.Router();
const authUser = require('../auth/authUser');
const authAdmin = require('../auth/authAdmin');

router.get('/', function (req, res) {
    res.json({
       message: 'Hello, this is homepage.'
    });
});

router.get('/dashboard',authUser, function (req, res) {
    res.json({
       message: 'This is dashboard.',
       youAre: req.user
    });
});

router.get('/admin', authUser, authAdmin, function (req, res) {
    res.json({
       message: 'Hello, admin. Long time no see.'
    });
});

module.exports = router;