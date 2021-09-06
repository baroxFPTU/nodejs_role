function authUser(req, res, next) {
    if (req.user == null) {
        return res.send('You need to login first.');
    };

    next();
}

module.exports = authUser;