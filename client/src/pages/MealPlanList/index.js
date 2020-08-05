import React from 'react';
import Navigation from '../../components/Navigation';
import Jumbotron from '../../components/Banner';
import MealPlanCard from '../../components/MealPlanCard';
import { Helmet } from 'react-helmet';

const MealPlanList = () => {
  return (
    <div>
      <Helmet>
        <title>RecipeBook Meal Plans</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <Jumbotron />
      <MealPlanCard />
    </div>
  );
};

export default MealPlanList;
