const { urlencoded } = require('express');
const express = require('express');
const indexRouter = require('./routes/index.route');
const projectsRouter = require('./routes/projects.route');
const setUser = require('./utils/setUser');
const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());

// get user info from params and assign to req.
app.use(setUser);

app.use('/projects', projectsRouter);
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('listening on port 3000');
})