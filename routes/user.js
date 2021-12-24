const userController = require("../controllers/user.js");
const auth = require('../middleware/auth');

module.exports = (server) => {
    //GESTION LES USERS

    server.get('/users', userController.getAllUsers);
    server.get('/user/:id', userController.getOneUser);
    server.put('/user/:id', userController.putOneUser);
    server.put('/password/user/:id', userController.putPasswordUser);
    server.post('/auth/signup', userController.signup);
    server.post('/auth/login', userController.login);
}
