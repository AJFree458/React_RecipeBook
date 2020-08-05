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
  prepTime: {
    type: String,
  },
  cookTime: {
    type: String,
  },
  ingredients: [
    {
      quantity: {
        type: Number,
      },
      unit: {
        type: String,
      },
      ingredientName: {
        type: String,
      },
    },
  ],
  servings: {
    type: String,
  },
  equipment: {
    type: String,
  },
  directions: [
    {
      step: {
        type: Number,
      },
      instruction: {
        type: String,
      },
    },
  ],
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = { Recipe, recipeSchema };
