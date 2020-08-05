import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../../components/Navigation';
import NewRecipeCard from '../../components/NewRecipeCard';

const NewRecipe = () => {
  return (
    <div>
      <Helmet>
        <title>RecipeBook</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <NewRecipeCard />
    </div>
  );
};

export default NewRecipe;
