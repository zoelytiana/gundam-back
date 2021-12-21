const userController = require("../controllers/user.js");

module.exports = (server) => {
    //GESTION LES USERS

    server.get('/users', userController.getAllUsers);
    server.get('/user/:id', userController.getOneUser);
    server.put('/user/:id',auth, userController.putOneUser);
    server.put('/password/user/:id',auth, userController.putPasswordUser);
    server.post('/auth/signup',auth, userController.signup);
    server.post('/auth/login',auth, userController.login);
}
