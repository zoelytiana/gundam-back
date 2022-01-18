const userController = require("../controllers/user.js");
const auth = require('../middleware/auth');

module.exports = (server) => {

    //route d'affichage de tous les utilisateurs
    server.get('/users', userController.getAllUsers);
    //route affichage d'un utilisateur
    server.get('/user/:id', userController.getOneUser);
    //route mise à jour d'un utilisateyr
    server.put('/user/:id', userController.putOneUser);
    //route modification de mot de passe
    server.put('/password/user/:id', userController.putPasswordUser);
    //route d'enregistrement
    server.post('/auth/signup', userController.signup);
    //route d'authentification
    server.post('/auth/login', userController.login);
}
