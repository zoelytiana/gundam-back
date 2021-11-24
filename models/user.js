const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String},
  firstName: { type: String},
  phone: { type: String},
  birthday: { type: String},
  billingAddress:{street: { type: String},
  city: { type: String},
  country: { type: String}},
  deliveryAddress:{street: { type: String},
  city: { type: String},
  country: { type: String}}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);