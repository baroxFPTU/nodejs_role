const { ROLE } = require('../db/db');

function authAdmin(req, res, next) {
    if (req.user.role == ROLE.admin) {
       return next();
    }

    res.json({
        status: 'fail',
        statusCode: 403,
        message: 'You can access here.'
    });
}

module.exports = authAdmin;