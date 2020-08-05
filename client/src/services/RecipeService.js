import axios from 'axios';

const CreateRecipe = (
  author,
  recipeName,
  description,
  ingredients,
  prepTime,
  cookTime,
  servings,
  equipment,
  directions
) => {
  console.log('----Recipe Service Axios Call----');

  return axios.post('api/recipe', {
    author,
    recipeName,
    description,
    ingredients,
    prepTime,
    cookTime,
    servings,
    equipment,
    directions,
  });
};

const getAllRecipes = () => {
  return axios.get('api/recipe');
};

const getRecipeById = (id) => {
  return axios.get('api/recipe/' + id);
};

export default {
  CreateRecipe,
  getAllRecipes,
  getRecipeById,
};
