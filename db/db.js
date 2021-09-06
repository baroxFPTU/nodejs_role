const ROLE = {
    admin: 'admin',
    basic: 'basic',
}

const users = [
    {id: 1, name: 'Barox', role: ROLE.admin},
    {id: 2, name: 'TiuNguyn', role: ROLE.basic},
    {id: 3, name: 'David', role: ROLE.basic},
];

const projects = [
    {id: 1, name: 'Project 1', userID: 1},
    {id: 2, name: 'Project 2', userID: 2},
    {id: 3, name: 'Project 2', userID: 2},
    {id: 4, name: 'Project 2', userID: 2},
    {id: 5, name: 'Project 3', userID: 3},
];

module.exports = {
    ROLE: ROLE,
    users: users,
    projects: projects,
};