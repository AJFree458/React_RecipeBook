const router = require('express').Router();
const recipeRoutes = require('./recipe');
const auth = require('./authRoutes');
const user = require('./user');

// Book routes
router.use('/recipe', recipeRoutes);
router.use('/auth', auth);
router.use('/user', user);

module.exports = router;