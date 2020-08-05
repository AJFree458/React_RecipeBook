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
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/mealplan">
            <MealPlanList />
          </Route>

          <Route exact path="/newmealplan">
            <NewMealPlan />
          </Route>

          <Route exact path="/newrecipe">
            <NewRecipe />
          </Route>

          <Route exact path="/recipe/:id" component={RecipeView} />

          <Route exact path="/mealplan/:id" component={MealPlanView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
