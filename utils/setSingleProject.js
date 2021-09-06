const { projects } = require('../db/db');

function setSingleProject(req, res, next) {
    let projectID = req.params.projectID;
    req.project = projects.find(pj => pj.id == projectID);

    if (req.project) {
      return  next();
    }

    return res.send('Project not found.')
}

module.exports = setSingleProject;