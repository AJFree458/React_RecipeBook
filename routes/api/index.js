const router = require('express').Router();
const recipeRoutes = require('./recipe');
const auth = require('./auth.routes');
const user = require('./auth.routes');
const mealPlanRoutes = require('./mealPlan');

// Recipe routes
router.use('/recipe', recipeRoutes);
router.use('/auth', auth);
router.use('/user', user);
router.use('/mealplan', mealPlanRoutes);

module.exports = router;
