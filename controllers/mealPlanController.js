const db = require('../models');
const MealPlan = db.MealPlan;

// Defining methods for the mealPlanController
module.exports = {
  findAll: function (req, res) {
    console.log('Meal Plan Controller: findAll');
    db.MealPlan.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    console.log('Meal Plan Controller: findById()');
    db.MealPlan.findById(req.params.id)
      .lean()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log('============Meal Plan Controller: Create()=================');
    console.log(req.body);

    Recipe.create(req.body)
      .then(function (dbModel) {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log('Meal Plan Controller: Update()');
    console.log('objectID', req.params.id);
    console.log(req.body);
    // db.MealPlan
    //   .findOneAndUpdate({ _id: req.params.id }, req.body)
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    console.log('Meal Plan Controller: remove()');
    console.log('objectID', req.params.id);

    // db.MealPlan
    //   .findById({ _id: req.params.id })
    //   .then((dbModel) => dbModel.remove())
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
};
