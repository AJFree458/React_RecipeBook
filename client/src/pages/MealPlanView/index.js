import React from 'react';
import Navigation from '../../components/Navigation';
import { Helmet } from 'react-helmet';

const MealPlanView = () => {
  return (
    <div>
      <Helmet>
        <title>Meal Plan</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <h1>Coming Soon!</h1>
    </div>
  );
};

export default MealPlanView;
