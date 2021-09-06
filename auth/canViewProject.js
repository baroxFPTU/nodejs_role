const { ROLE } = require("../db/db");

function canViewProject (user, project) {
    return (user.role == ROLE.admin || user.id == project.userID);
}

module.exports = canViewProject;