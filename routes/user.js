const userController = require("../controllers/user.js");

module.exports = (server) => {
    //GESTION LES USERS

    server.get('/users', userController.getAllUsers);
    server.get('/user/:id', userController.getOneUser);
    server.put('/user/:id', userController.putOneUser);
    server.post('/auth/signup', userController.signup);
    server.post('/auth/login', userController.login);
}
