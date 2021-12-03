const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
  userRegistrationDate : { type: Date, default: Date.now },
  userIp : { type: String},
  userName: { type: String},
  userFirstName: { type: String},
  userPhone: { type: String},
  userBirthday: { type: String},
  userAddress : {street: { type: String},
  city: { type: String},
  country: { type: String}},
  userBillingAddress:{street: { type: String},
  city: { type: String},
  country: { type: String}},
  userDeliveryAddress:{street: { type: String},
  city: { type: String},
  country: { type: String}}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
