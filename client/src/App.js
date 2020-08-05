import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MealPlanList from './pages/MealPlanList';
import MealPlanView from './pages/MealPlanView';
import NewMealPlan from './pages/NewMealPlan';
import NewRecipe from './pages/NewRecipe';
import RecipeView from './pages/RecipeView';
import Register from './pages/Register';
import Head from './components/Head';

import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Router>
        <Switch>
          <Route path="/" component={Home} />

          <Route exact path="/register" component={Register} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/mealplan" component={MealPlanList} />

          <Route exact path="/newmealplan" component={NewMealPlan} />

          <Route exact path="/newrecipe" component={NewRecipe} />

          <Route exact path="/recipe/:id" component={RecipeView} />

          <Route exact path="/mealplan/:id" component={MealPlanView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
