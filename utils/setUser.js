const { users } = require('../db/db');

function setUser(req, res, next) {
    let userID = req.body.userID;
    if (userID) {
        req.user = users.find(user => user.id == userID);
    }

    next();
}

module.exports = setUser;