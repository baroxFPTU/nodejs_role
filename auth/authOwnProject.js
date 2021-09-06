function authOwnProject(req, res, next) {
    if (req.user.id == req.project.userID) {
       return next();
    }

    return res.send('May khong co quyen o day');
}


module.exports = authOwnProject;