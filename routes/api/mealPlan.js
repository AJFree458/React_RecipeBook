const router = require('express').Router();
const mealPlanController = require('../../controllers/mealPlanController');

// Matches with "/api/mealplan"
router
  .route('/')
  .get(mealPlanController.findAll)
  .post(mealPlanController.create);

// Matches with "/api/mealplan/:id"
router
  .route('/:id')
  .get(mealPlanController.findById)
  .put(mealPlanController.update)
  .delete(mealPlanController.remove);

module.exports = router;
