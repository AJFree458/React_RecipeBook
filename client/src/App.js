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

          <Route path="/register" component={Register} />

          <Route path="/login" component={Login} />

          <Route path="/mealplan" component={MealPlanList} />

          <Route path="/newmealplan" component={NewMealPlan} />

          <Route path="/newrecipe" component={NewRecipe} />

          <Route path="/recipe/:id" component={RecipeView} />

          <Route path="/mealplan/:id" component={MealPlanView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
