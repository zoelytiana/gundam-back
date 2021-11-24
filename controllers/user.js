const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.getAllUsers = (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
}  

module.exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id}).then(
        user => {
            res.status(200).json(user);
})
}

exports.putOneUser = (req, res, next) => {
    const userData = new User({
      _id: req.params.id,
      email: req.body.email,
      name: req.body.name,
      firstName: req.body.firstName,
      phone: req.body.phone,
      birthday: req.body.birthday,
      billingAddress :{street: req.body.billingAddress.street,
      city: req.body.billingAddress.city,
      country: req.body.billingAddress.country},
      deliveryAddress:{street: req.body.deliveryAddress.street,
      city: req.body.deliveryAddress.city,
      country: req.body.deliveryAddress.country},
      password: req.body.password
    });
    User.updateOne({_id: req.params.id}, userData).then(
      () => {
        res.status(201).json({
            data : userData,
          message: 'Thing updated successfully!'
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

module.exports.signup = (req, res, next) => {
    console.log('object', req.body);
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error:"koi?" }));
  };

  module.exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
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
  