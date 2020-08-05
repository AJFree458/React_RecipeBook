import React, { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import RecipeCard from '../../components/RecipeCard';
import RecipeService from '../../services/RecipeService';
import { Helmet } from 'react-helmet';

const RecipeView = (props) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    RecipeService.getRecipeById(props.match.params.id).then((recipe) => {
      setRecipe(recipe.data);
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>RecipeBook Recipe</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <RecipeCard
        RecipeSrc={recipe.servings}
        RecipeTitle={recipe.recipeName}
        RecipeCookTime={recipe.cookTime}
        RecipeDirections={recipe.directions}
        RecipeDescription={recipe.description}
        RecipeEquipment={recipe.equipment}
        RecipeIngredients={recipe.ingredients}
        RecipePrepTime={recipe.prepTime}
        RecipeServings={recipe.servings}
      />
    </div>
  );
};

export default RecipeView;
