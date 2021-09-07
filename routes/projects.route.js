const express = require('express');
const router = express.Router();

const authUser = require('../auth/authUser');
const authOwnProject = require('../auth/authOwnProject');
const authGetProject = require('../auth/authGetProject');

const setProjects = require('../utils/setProjects');
const setSingleProject = require('../utils/setSingleProject');

router.get('/',authUser, setProjects, function (req, res) {
    res.json({
       message: 'Hello, this is all projects you need.',
       yourAre: req.user,
       youCanSee: req.projects
    });
});

router.get('/:projectID', authUser, setSingleProject, authGetProject, function(req, res) {
    res.json({
        message: `Project: ${req.project.name}`,
        project: req.project,
    })
});

router.delete('/:projectID', authUser, setSingleProject, authOwnProject, function(req, res) {
    res.send('Project deleted');
})

module.exports = router;