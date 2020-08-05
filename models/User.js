const mongoose = require('mongoose');
const Recipe = require('./Recipe').recipeSchema;
const MealPlan = require('./MealPlan').mealPlanSchema;

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
