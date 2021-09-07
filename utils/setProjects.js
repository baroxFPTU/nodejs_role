const {ROLE,projects } = require('../db/db');

function setProjects(req, res, next) {
    req.projects = projects.filter(project => project.userID === req.user.id);

    if (req.user.role == ROLE.admin) {
        req.projects = projects;
    }

    next();
}

module.exports = setProjects;