const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealPlanSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  planweek: {
    type: String,
  },
  week: [
    {
      day: {
        type: String,
      },
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

module.exports = { MealPlan, mealPlanSchema };
