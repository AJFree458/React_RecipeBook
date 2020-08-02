const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealPlanSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  week: {
    type: String,
  },
  day: [
    {
      breakfast: {
        type: String,
      },
      lunch: {
        type: String,
      },
      dinner: {
        type: String,
      },
      snack: {
        type: String,
      },
    },
  ],
});

const MealPlan = mongoose.model('mealplan', mealPlanSchema);

module.exports = MealPlan;
