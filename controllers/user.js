const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


//afficher tous les utilisateurs
module.exports.getAllUsers = (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
}  

//afficher un utilisateur
module.exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id}).then(
        user => {
            res.status(200).json(user);
})
}

//mettre à jour un utilisateur
exports.putOneUser = (req, res, next) => {
    console.log("requette",req);

    if (req.body.newPassword){
      bcrypt.hash(req.body.newPassword, 10)
      .then(hash => {
        req.body.userPassword = hash
        console.log('mdp modifié');
        });
    }


    const userData = new User({
        _id: req.params.id,
        userEmail: req.body.userEmail,
        userName: req.body.userName,
        userIP : "192.168.1.1",
        userFirstName: req.body.userFirstName,
        userPhone: req.body.userPhone,
        userBirthday: req.body.userBirthday,
        userAddress:{
          street: req.body.userAddress.street,
          city: req.body.userAddress.city,
          country: req.body.userAddress.country},
        userBillingAddress :{
          street: req.body.userBillingAddress.street,
        city: req.body.userBillingAddress.city,
        country: req.body.userBillingAddress.country},
        userDeliveryAddress:{
          street: req.body.userDeliveryAddress.street,
        city: req.body.userDeliveryAddress.city,
        country: req.body.userDeliveryAddress.country},
        userPassword: req.body.userPassword
      });
  
    User.updateOne({_id: req.params.id}, userData).then(
      () => {
        res.status(201).json({
            data : userData,
          message: 'User data updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


  //mettre à jour le mot de passe utilisateur
  module.exports.putPasswordUser = (req, res, next) => {
    console.log('object', req.body);
    bcrypt.hash(req.body.userPassword, 10)
      .then(hash => {
        const userData = new User({
        userPassword: hash
        });
        User.updateOne({_id: req.params.id}, userData).then(
          () => {
            res.status(201).json({
                data : userData,
              message: 'Password updated successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      })
      .catch(error => res.status(500).json({ error:"koi?" }));
  };

  //Créer un nouvel utilisateur
module.exports.signup = (req, res, next) => {
    console.log('object', req.body);
    bcrypt.hash(req.body.userPassword, 10)
      .then(hash => {
        const user = new User({
          userEmail: req.body.userEmail,
          userIp : "192.168.10.1",
          userName: "",
          userFirstName: "",
         userPhone: "",
         userBirthday: "",
         userAddress :{street: "",
        city: "",
        country: ""},
         userBillingAddress :{street: "",
        city: "",
        country: ""},
        userDeliveryAddress:{street: "",
        city: "",
        country: ""},
        userPassword: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ message:'Utilisateur existant' }));
      })
      .catch(error => res.status(500).json({ error:"koi?" }));
  };

  //vérifier une authentification utilisateur
  module.exports.login = (req, res, next) => {
    User.findOne({ userEmail: req.body.userEmail })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.userPassword, user.userPassword)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
  