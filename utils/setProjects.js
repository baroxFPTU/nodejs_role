const { projects } = require('../db/db');

function setProjects(req, res, next) {
    if (req.user) {
        req.projects = projects.filter(project => project.userID === req.user.id);
    }

    next();
}

module.exports = setProjects;