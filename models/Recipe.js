const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  recipeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      qty: {
        type: Number,
      },
      unit: {
        type: String,
      },
      ingredient: {
        type: String,
      },
    },
  ],
  prepTime: {
    type: String,
  },
  cookTime: {
    type: String,
  },
  servings: {
    type: String,
  },
  equipment: {
    type: String,
  },
  directions: {
    type: String,
  },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = { Recipe, recipeSchema };
