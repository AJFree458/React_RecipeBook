const mongoose = require('mongoose');
const Recipe = require('./Recipe');
const MealPlan = require('./MealPlan');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [Recipe],
  MealPlan: [MealPlan],
});

const User = mongoose.model('user', userSchema);

module.exports = User;
