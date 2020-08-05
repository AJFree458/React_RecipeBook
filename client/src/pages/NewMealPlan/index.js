import React from 'react';
import Navigation from '../../components/Navigation';
import { Helmet } from 'react-helmet';

const NewMealPlan = () => {
  return (
    <div>
      <Helmet>
        <title>New Meal Plan</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <h1>Coming Soon!</h1>
    </div>
  );
};

export default NewMealPlan;
