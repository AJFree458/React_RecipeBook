import axios from 'axios';

const API_URL = '/api/recipe';

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

  return axios.post(API_URL, {
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
  return axios.get(API_URL);
};

const getRecipeById = (id) => {
  return axios.get(API_URL + '/' + id);
};

export default {
  CreateRecipe,
  getAllRecipes,
  getRecipeById,
};
