const express = require('express');
const router = express.Router();
const authUser = require('../auth/authUser');
const authOwnProject = require('../auth/authOwnProject');
const canViewProject = require('../auth/canViewProject');
const setProjects = require('../utils/setProjects');
const setSingleProject = require('../utils/setSingleProject');
const {ROLE,projects } = require('../db/db');

router.get('/',authUser, setProjects, function (req, res) {
    if (req.user.role == ROLE.admin) {
        req.projects = projects;
    }

    res.json({
       message: 'Hello, this is all projects you need.',
       yourAre: req.user,
       youCanSee: req.projects
    });
});

router.get('/:projectID', authUser, setSingleProject, function(req, res) {
    if (!canViewProject(req.user, req.project)) {
      return res.json({ message: 'Project not found.'});
    }

    res.json({
        message: `Project: ${req.project.name}`,
        project: req.project,
    })
});

router.delete('/:projectID', authUser, setSingleProject, authOwnProject, function(req, res) {
    res.send('Project deleted');
})

module.exports = router;