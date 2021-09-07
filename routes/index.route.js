const express = require('express');
const router = express.Router();
const authUser = require('../auth/authUser');
const authRole = require('../auth/authRole');
const {ROLE } = require('../db/db');

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

router.get('/admin', authUser, authRole(ROLE.admin), function (req, res) {
    res.json({
       message: 'Hello, admin. Long time no see.'
    });
});

module.exports = router;